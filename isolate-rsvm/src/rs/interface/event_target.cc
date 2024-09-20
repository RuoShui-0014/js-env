#include "rs/interface/event_target.h"
#include "rs/rsvm.h"

using namespace v8;

namespace rs {
    void EventTargetConstructor(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        isolate->ThrowException(Exception::TypeError(ExceptionMessages::ConstructorNew()));
    }

    Local<FunctionTemplate> InterfaceEventTargetTemplate(Isolate* isolate) {
        Local<FunctionTemplate> eventTarget = FunctionTemplate::New(isolate);
        eventTarget->SetCallHandler(EventTargetConstructor);
        eventTarget->SetLength(0);
        eventTarget->SetClassName(v8_str("EventTarget"));

        Local<ObjectTemplate> prototype_template = eventTarget->PrototypeTemplate();
        v8_set_property(
            prototype_template, Symbol::GetToStringTag(isolate), v8_str("EventTarget"),
            PropertyAttribute::ReadOnly | PropertyAttribute::DontEnum
        );

        return eventTarget;
    }
}