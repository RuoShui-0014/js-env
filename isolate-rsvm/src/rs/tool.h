#ifndef RS_TOOL_H_
#define RS_TOOL_H_

#include <node.h>
#include <node_object_wrap.h>
#include <stdexcept>

using namespace v8;

namespace rs {
    using RSObjectWrap = node::ObjectWrap;

    template <class T>
    inline T* RSUnwrap(v8::Local<v8::Object> handle, int index = 0) {
        assert(!handle.IsEmpty());
        assert(handle->InternalFieldCount() > 0);
        void* ptr = handle->GetAlignedPointerFromInternalField(index);
        RSObjectWrap* wrap = static_cast<RSObjectWrap*>(ptr);
        return static_cast<T*>(wrap);
    }

    template <typename T>
    inline T v8_unmaybe(Maybe<T> maybe) {
        T value;
        if (maybe.To(&value)) {
            return value;
        }
        else {
            throw std::exception();
        }
    }

    template <typename T>
    inline Local<T> v8_unmaybe(MaybeLocal<T> maybe) {
        Local<T> value;
        if (maybe.ToLocal(&value)) {
            return value;
        }
        else {
            throw std::exception();
        }
    }

    inline Local<String> v8_str(const char* str) {
        return v8_unmaybe(String::NewFromOneByte(Isolate::GetCurrent(), (const uint8_t*)str, v8::NewStringType::kInternalized));
    }
    inline Local<String> v8_str(Isolate* isolate, const char* str) {
        return v8_unmaybe(String::NewFromOneByte(isolate, (const uint8_t*)str, v8::NewStringType::kInternalized));
    }

    inline void v8_set_property(Local<Object> target, Local<Name> property, Local<Value> value) {
        auto isolate = Isolate::GetCurrent();
        auto context = isolate->GetCurrentContext();

        target->Set(context, property, value);
    }
    inline void v8_set_property(Local<ObjectTemplate> target, Local<Name> property, Local<Data> value, int attributes = PropertyAttribute::None) {
        auto isolate = Isolate::GetCurrent();
        target->Set(property, value, static_cast<PropertyAttribute>(attributes));
    }

    struct ConstantValueItem {
        const char* name;
        int value = 0;
        PropertyAttribute propertyAttribute;
    };
    struct AttributeItem {
        const char* name = "";
        FunctionCallback get_callback = nullptr;
        FunctionCallback set_callback = nullptr;
        PropertyAttribute propertyAttribute;
        Local<Signature> signature = Local<Signature>();
        SideEffectType sideEffectType = SideEffectType::kHasSideEffect;
    };
    struct OperationItem {
        const char* name = "";
        int length = 0;
        FunctionCallback callback = nullptr;
        PropertyAttribute propertyAttribute;
        Local<Signature> signature = Local<Signature>();
        SideEffectType sideEffectType = SideEffectType::kHasSideEffect;
    };

    template<typename T>
    class Configs {
    public:
        Configs(T* ary, int size) : info_(ary), size_(size) {}
        T Get(int index) { return info_[index]; }
        int Size() { return size_; }
    private:
        T* info_ = nullptr;
        int size_ = 0;
    };

    // CONFIGS(ary)
#define CONFIGS(instance) Configs(instance, sizeof(instance)/sizeof(decltype(instance[0])))

    void v8_defineConstantValues(Isolate* isolate, Local<ObjectTemplate> target, Configs<ConstantValueItem> configs);
    void v8_defineAttributes(Isolate* isolate, Local<ObjectTemplate> target, Configs<AttributeItem> configs);
    void v8_defineOperations(Isolate* isolate, Local<ObjectTemplate> target, Configs<OperationItem> configs);

    inline Local<FunctionTemplate> v8_function(v8::FunctionCallback callback = nullptr, const char* name = "", int length = 0, bool isConstruct = false);

    inline Local<FunctionTemplate> v8_getter(const char* name = "", v8::FunctionCallback callback = nullptr, Local<Signature> signature = Local<Signature>());
    inline Local<FunctionTemplate> v8_setter(const char* name = "", v8::FunctionCallback callback = nullptr, Local<Signature> signature = Local<Signature>());
    inline Local<FunctionTemplate> v8_operation(const char* name = "", int lenght = 0, v8::FunctionCallback callback = nullptr, Local<Signature> signature = Local<Signature>());
}

#endif // !RS_TOOL_H_