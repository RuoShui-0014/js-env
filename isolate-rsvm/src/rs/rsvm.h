#ifndef RS_RSVM_H_
#define RS_RSVM_H_

#include "rs/tool.h"

using namespace v8;

namespace rs {

    class RSWindow : public RSObjectWrap {
    public:
        RSWindow() = delete;
        RSWindow(Local<Object> target, Isolate* isolate) {
            RSObjectWrap::Wrap(target);
        }
    public:
        bool log = false;
        bool glog = false;
    public:
        //static RSWindow* Wrapper(Local<Object> target) {
        //    RSWindow* window = new RSWindow(target);
        //    return window;
        //}

        static void LogGetCallback(const FunctionCallbackInfo<Value>& info) {
            Isolate* isolate = info.GetIsolate();

            RSWindow* rec = RSUnwrap<RSWindow>(isolate->GetCurrentContext()->Global());
            info.GetReturnValue().Set(Boolean::New(isolate, rec->log));
        }
        static void LogSetCallback(const FunctionCallbackInfo<Value>& info) {
            Isolate* isolate = info.GetIsolate();

            RSWindow* rec = RSUnwrap<RSWindow>(isolate->GetCurrentContext()->Global());
            rec->log = info[0]->IsTrue();
        }
        static void GlogGetCallback(const FunctionCallbackInfo<Value>& info) {
            Isolate* isolate = info.GetIsolate();

            RSWindow* rec = RSUnwrap<RSWindow>(isolate->GetCurrentContext()->Global());
            info.GetReturnValue().Set(Boolean::New(isolate, rec->glog));
        }
        static void GlogSetCallback(const FunctionCallbackInfo<Value>& info) {
            Isolate* isolate = info.GetIsolate();

            RSWindow* rec = RSUnwrap<RSWindow>(isolate->GetCurrentContext()->Global());
            rec->glog = info[0]->IsTrue();
        }
    };

    class ExceptionMessages {
    public:
        static Local<String> ConstructorCalledAsFunction() {
            return v8_str("Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
        }
        static Local<String> ConstructorNew() {
            return v8_str("Illegal constructor");
        }
    };

    template<typename T>
    class Hook {
    public:
        Hook(T info) : info{info} {
            Isolate* isolate = info.GetIsolate();
            Local<Context> context = isolate->GetCurrentContext();

            Local<Object> global = context->Global();
            window = RSUnwrap<RSWindow>(global);

            log = window->log;
            window->log = false;
            glog = window->glog;
            window->glog = false;
        }
        ~Hook() {
            window->log = log;
            window->glog = glog;
        }
    public:
        void Operation(Local<Object> handle, Local<Value> result) {
            if (log) {
                Isolate* isolate = info.GetIsolate();
                Local<Context> context = isolate->GetCurrentContext();

                Local<Value> rsvm = context->Global()->Get(context, v8_str(isolate, "rsvm")).ToLocalChecked();
                if (rsvm->IsObject()) {
                    Local<Value> logFunction = rsvm.As<Object>()->Get(context, v8_str("logFunction")).ToLocalChecked();
                    if (logFunction->IsObject()) {
                        Local<Value> callback = logFunction.As<Object>()->Get(context, v8_str("operation")).ToLocalChecked();
                        if (callback->IsFunction()) {
                            Local<Array> paramsArray = Array::New(isolate, info.Length());
                            for (int i = 0; i < info.Length(); i++) {
                                paramsArray->Set(context, i, info[i]);
                            }
                            Local<Value> params[]{
                                info.This(), handle->Get(context, v8_str("name")).ToLocalChecked(),
                                paramsArray, result
                            };
                            callback.As<Function>()->Call(context, Null(isolate), sizeof(params) / sizeof(Local<Value>), params);
                        }
                    }
                }
            }
        }
        void GlobalGet(Local<Value> property) {
            if (glog) {
                Isolate* isolate = info.GetIsolate();
                Local<Context> context = isolate->GetCurrentContext();
                Local<Object> global = context->Global();

                Local<Value> rsvm = global->Get(context, v8_str(isolate, "rsvm")).ToLocalChecked();
                if (rsvm->IsObject()) {
                    Local<Value> logFunction = rsvm.As<Object>()->Get(context, v8_str("logFunction")).ToLocalChecked();
                    if (logFunction->IsObject()) {
                        Local<Value> windowGetter = logFunction.As<Object>()->Get(context, v8_str("windowGetter")).ToLocalChecked();
                        if (windowGetter->IsFunction()) {
                            Local<Value> params[]{
                                v8_str("window"), property, global->Get(context, property).ToLocalChecked()
                            };
                            windowGetter.As<Function>()->Call(context, info.Holder(), sizeof(params) / sizeof(Local<Value>), params);
                        }
                    }
                }
            }
        }
        void GlobalSet(Local<Value> property, Local<Value> value) {
            if (glog) {
                Isolate* isolate = info.GetIsolate();
                Local<Context> context = isolate->GetCurrentContext();
                Local<Object> global = context->Global();

                Local<Value> rsvm = global->Get(context, v8_str(isolate, "rsvm")).ToLocalChecked();
                if (rsvm->IsObject()) {
                    Local<Value> logFunction = rsvm.As<Object>()->Get(context, v8_str("logFunction")).ToLocalChecked();
                    if (logFunction->IsObject()) {
                        Local<Value> windowSetter = logFunction.As<Object>()->Get(context, v8_str("windowSetter")).ToLocalChecked();
                        if (windowSetter->IsFunction()) {
                            Local<Value> params[]{
                                v8_str("window"), property, value, global->Get(context, property).ToLocalChecked()
                            };
                            windowSetter.As<Function>()->Call(context, info.Holder(), sizeof(params) / sizeof(Local<Value>), params);
                        }
                    }
                }
            }
        }
    public:
        T info;
        bool log = false;
        bool glog = false;
        RSWindow* window = nullptr;
    };

    template<typename T>
    class InterceptHook {
    public:
        InterceptHook(T info) {
            Isolate* isolate = info.GetIsolate();
            Local<Context> context = info.This()->GetCreationContextChecked();

            Local<Object> global = context->Global();
            window = RSUnwrap<RSWindow>(global);
            glog = window->glog;
            window->glog = false;
        }
        ~InterceptHook() {
            window->glog = glog;
        }
    public:
        bool glog = false;
        RSWindow* window = nullptr;
    };

    void NameGetter(Local<Name> property, const PropertyCallbackInfo<Value>& info);
    void NameSetter(Local<Name> property, Local<Value> value, const PropertyCallbackInfo<Value>& info);
    void NameQuery(Local<Name> property, const PropertyCallbackInfo<Integer>& info);
    void NameDefiner(Local<Name> property, const PropertyDescriptor& desc, const PropertyCallbackInfo<Value>& info);
    void NameDeleter(Local<Name> property, const PropertyCallbackInfo<Boolean>& info);
    void NameDescriptor(Local<Name> property, const PropertyCallbackInfo<Value>& info);
    void NameEnumerator(const PropertyCallbackInfo<Array>& info);

    void IndexGetter(uint32_t index, const PropertyCallbackInfo<Value>& info);
    void IndexSetter(uint32_t index, Local<Value> value, const PropertyCallbackInfo<Value>& info);
    void IndexQuery(uint32_t index, const PropertyCallbackInfo<Integer>& info);
    void IndexDefiner(uint32_t index, const PropertyDescriptor& desc, const PropertyCallbackInfo<Value>& info);
    void IndexDeleter(uint32_t index, const PropertyCallbackInfo<Boolean>& info);
    void IndexDescriptor(uint32_t index, const PropertyCallbackInfo<Value>& info);
    void IndexEnumerator(const PropertyCallbackInfo<Array>& info);

    void RsCreateNameInterceptor(const FunctionCallbackInfo<Value>& info);
    void RsCreateIndexInterceptor(const FunctionCallbackInfo<Value>& info);
    void RsCreateInterceptor(const FunctionCallbackInfo<Value>& info);

    // 创建不可检测对象
    void DocumentAll(const FunctionCallbackInfo<Value>& info);
    void RsCreateDocumentAll(const FunctionCallbackInfo<Value>& info);

    // 创建不可检测对象
    void ConstructorErrorCallback(const FunctionCallbackInfo<Value>& info);
    void ConstructorNoErrorCallback(const FunctionCallbackInfo<Value>& info);
    void RsCreateConstructor(const FunctionCallbackInfo<Value>& info);

    // getter
    void GetterCallback(const FunctionCallbackInfo<Value>& info);
    void RsCreateGetter(const FunctionCallbackInfo<Value>& info);

    // setter
    void SetterCallback(const FunctionCallbackInfo<Value>& info);
    void RsCreateSetter(const FunctionCallbackInfo<Value>& info);

    // action
    void ActionCallback(const FunctionCallbackInfo<Value>& info);
    void RsCreateAction(const FunctionCallbackInfo<Value>& info);

    // window getter
    void WindowGetterCallback(const FunctionCallbackInfo<Value>& info);
    void RsCreateWindowGetter(const FunctionCallbackInfo<Value>& info);

    // window setter
    void WindowSetterCallback(const FunctionCallbackInfo<Value>& info);
    void RsCreateWindowSetter(const FunctionCallbackInfo<Value>& info);

    // window action
    void WindowActionCallback(const FunctionCallbackInfo<Value>& info);
    void RsCreateWindowAction(const FunctionCallbackInfo<Value>& info);

    // 可创建一般函数和构造函数
    void RsCreateFunctioncallback(const FunctionCallbackInfo<Value>& info);
    void RsCreateFunction(const FunctionCallbackInfo<Value>& info);


    // 给js对象在c++层面设置/获取属性
    void RsSetPrivateProperty(const FunctionCallbackInfo<Value>& info);
    void RsGetPrivateProperty(const FunctionCallbackInfo<Value>& info);

    // 同 eval
    void RsRunHTMLScript(const FunctionCallbackInfo<Value>& info);

    Local<ObjectTemplate> CreateRSVM(Isolate* isolate, bool intercept = false);

}

#endif // !RS_RSVM_H_
