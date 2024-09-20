#include "rs/interface/window.h"
#include "rs/rsvm.h"

using namespace v8;

namespace rs {

    void GlobalNameGetter(Local<Name> property, const PropertyCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();

        HandleScope scope(isolate);
        Hook get_hook(info);
        get_hook.GlobalGet(property);
    }
    void GlobalNameSetter(Local<Name> property, Local<Value> value, const PropertyCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        Hook set_hook(info);
        set_hook.GlobalSet(property, value);
    }
    void GlobalIndexGetter(uint32_t index, const PropertyCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();

        HandleScope scope(isolate);
        Hook get_hook(info);
        get_hook.GlobalGet(Number::New(isolate, index));
    }
    void GlobalIndexSetter(uint32_t index, Local<Value> value, const PropertyCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();

        HandleScope scope(isolate);
        Hook set_hook(info);
        set_hook.GlobalSet(Number::New(isolate, index), value);
    }

    void WindowGetCallback(const FunctionCallbackInfo<Value>& info) {
        Local<Context> context = info.GetIsolate()->GetCurrentContext();
        info.GetReturnValue().Set(context->Global());
    }
    void WindowConstructorCallback(const FunctionCallbackInfo<Value>& info) {
        info.GetIsolate()->ThrowException(Exception::TypeError(ExceptionMessages::ConstructorNew()));
    }

    Local<FunctionTemplate> InterfaceWindowTemplate(Isolate* isolate) {
        Local<FunctionTemplate> interface_template = FunctionTemplate::New(isolate);
        interface_template->SetCallHandler(WindowConstructorCallback);
        interface_template->SetLength(0);
        interface_template->SetClassName(v8_str(isolate, "Window"));

        Local<ObjectTemplate> prototype_template = interface_template->PrototypeTemplate();
        v8_set_property(
            prototype_template, Symbol::GetToStringTag(isolate), v8_str(isolate, "Window"),
            PropertyAttribute::ReadOnly | PropertyAttribute::DontEnum
        );
        ConstantValueItem constantValueTable[] = {
            {"PERSISTENT", 1, static_cast<PropertyAttribute>(PropertyAttribute::ReadOnly | PropertyAttribute::DontDelete)},
            {"TEMPORARY", 0, static_cast<PropertyAttribute>(PropertyAttribute::ReadOnly | PropertyAttribute::DontDelete)},
        };
        v8_defineConstantValues(isolate, prototype_template, CONFIGS(constantValueTable));

        Local<ObjectTemplate> instance_template = interface_template->InstanceTemplate();
        instance_template->SetInternalFieldCount(1);
        v8_set_property(instance_template, v8_str(isolate, "Window"), interface_template, PropertyAttribute::DontEnum);

        Local<Signature> signature = Signature::New(isolate, interface_template);
        AttributeItem attributeTable[] = {
            {"window", WindowGetCallback, nullptr, PropertyAttribute::DontDelete, signature},
        };
        v8_defineAttributes(isolate, instance_template, CONFIGS(attributeTable));

        instance_template->SetImmutableProto();

        return interface_template;
    }
    Local<ObjectTemplate> CreateRsGlobalTemplate(Isolate* isolate, bool intercept) {
        Local<FunctionTemplate> interface_template = InterfaceWindowTemplate(isolate);
        Local<ObjectTemplate> instance_template = interface_template->InstanceTemplate();

        v8_set_property(
            instance_template, v8_str(isolate, "rsvm"), CreateRSVM(isolate, intercept), PropertyAttribute::DontDelete | PropertyAttribute::DontEnum
        );

        if (intercept) {
            NamedPropertyHandlerConfiguration nameHandler(
                GlobalNameGetter, GlobalNameSetter, nullptr, nullptr, nullptr, nullptr, nullptr
            );
            instance_template->SetHandler(nameHandler);

            IndexedPropertyHandlerConfiguration indexHandler(
                GlobalIndexGetter, GlobalIndexSetter, nullptr, nullptr, nullptr, nullptr, nullptr
            );
            instance_template->SetHandler(indexHandler);
        }

        return instance_template;
    }
}