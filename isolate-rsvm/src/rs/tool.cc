#include "rs/tool.h"

namespace rs {
    void v8_defineConstantValues(Isolate* isolate, Local<ObjectTemplate> target, Configs<ConstantValueItem> configs) {
        for (int i = 0; i < configs.Size(); i++) {
            ConstantValueItem info = configs.Get(i);
            target->Set(isolate, info.name, Integer::New(isolate, info.value), info.propertyAttribute);
        }
    }
    void v8_defineAttributes(Isolate* isolate, Local<ObjectTemplate> target, Configs<AttributeItem> configs) {
        for (int i = 0; i < configs.Size(); i++) {
            AttributeItem info = configs.Get(i);
            Local<FunctionTemplate> get_fun_temp, set_fun_temp;
            std::string name = std::string(info.name);
            if (info.get_callback) {
                get_fun_temp = FunctionTemplate::New(
                    isolate, info.get_callback, Local<Value>(), info.signature, 0, ConstructorBehavior::kThrow, info.sideEffectType
                );
                std::string get_name = std::string("get ", 4) + name;
                get_fun_temp->SetClassName(v8_str(get_name.data()));
            }
            if (info.set_callback) {
                set_fun_temp = FunctionTemplate::New(
                    isolate, info.set_callback, Local<Value>(), info.signature, 1, ConstructorBehavior::kThrow, info.sideEffectType
                );
                std::string set_name = std::string("set ", 4) + name;
                set_fun_temp->SetClassName(v8_str(set_name.data()));
            }
            target->SetAccessorProperty(v8_str(info.name), get_fun_temp, set_fun_temp, info.propertyAttribute);
        }
    }
    void v8_defineOperations(Isolate* isolate, Local<ObjectTemplate> target, Configs<OperationItem> configs) {
        for (int i = 0; i < configs.Size(); i++) {
            OperationItem info = configs.Get(i);
            Local<FunctionTemplate> fun_temp = FunctionTemplate::New(
                isolate, info.callback, Local<Value>(), info.signature, info.length, ConstructorBehavior::kThrow, info.sideEffectType
            );
            fun_temp->SetClassName(v8_str(info.name));
            target->Set(isolate, info.name, fun_temp, info.propertyAttribute);
        }
    }

    Local<FunctionTemplate> v8_function(v8::FunctionCallback callback, const char* name, int length, bool isConstruct) {
        Isolate* isolate = Isolate::GetCurrent();

        Local<FunctionTemplate> func_temp = FunctionTemplate::New(
            isolate, callback, Local<Value>(), Local<Signature>(), length,
            isConstruct ? ConstructorBehavior::kAllow : ConstructorBehavior::kThrow
        );
        func_temp->SetClassName(v8_str(name));

        return func_temp;
    }

    Local<FunctionTemplate> v8_getter(const char* name, v8::FunctionCallback callback, Local<Signature> signature) {
        Isolate* isolate = Isolate::GetCurrent();

        Local<FunctionTemplate> func_temp = FunctionTemplate::New(
            isolate, callback, Local<Value>(), signature, 0, ConstructorBehavior::kThrow
        );
        func_temp->SetClassName(v8_str(name));

        return func_temp;
    }
    Local<FunctionTemplate> v8_setter(const char* name, v8::FunctionCallback callback, Local<Signature> signature) {
        Isolate* isolate = Isolate::GetCurrent();

        Local<FunctionTemplate> func_temp = FunctionTemplate::New(
            isolate, callback, Local<Value>(), signature, 1, ConstructorBehavior::kThrow
        );
        func_temp->SetClassName(v8_str(name));

        return func_temp;
    }
    Local<FunctionTemplate> v8_operation(const char* name, int lenght, v8::FunctionCallback callback, Local<Signature> signature) {
        Isolate* isolate = Isolate::GetCurrent();

        Local<FunctionTemplate> func_temp = FunctionTemplate::New(
            isolate, callback, Local<Value>(), signature, lenght, ConstructorBehavior::kThrow
        );
        func_temp->SetClassName(v8_str(name));

        return func_temp;
    }
}