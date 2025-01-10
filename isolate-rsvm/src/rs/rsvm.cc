#include "rs/rsvm.h"

using namespace v8;

namespace rs {
  //int  RSWindow::release_num = 0;
    void NameGetter(Local<Name> property, const PropertyCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();
        
        HandleScope scope(isolate);
        InterceptHook get_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("getter")).ToLocalChecked().As<Function>();

        Local<Value> params[]{ info.This(), property };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                info.GetReturnValue().Set(intercept->Get(context, v8_str("value")).ToLocalChecked());
            }
        }
    }
    void NameSetter(Local<Name> property, Local<Value> value, const PropertyCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        InterceptHook set_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("setter")).ToLocalChecked().As<Function>();

        Local<Value> params[] = { info.This(), property, value };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                info.GetReturnValue().Set(intercept->Get(context, v8_str("value")).ToLocalChecked());
            }
        }
    }
    void NameQuery(Local<Name> property, const PropertyCallbackInfo<Integer>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        InterceptHook query_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("query")).ToLocalChecked().As<Function>();

        Local<Value> params[]{ info.This(), property };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                Local<Value> value = intercept->Get(context, v8_str("value")).ToLocalChecked();
                int32_t rc = 0;
                if (value->IsObject()) {
                    Local<Object> obj = value.As<Object>();
                    if (obj->Get(context, v8_str("writable")).ToLocalChecked()->IsFalse()) {
                        rc |= PropertyAttribute::ReadOnly;
                    }
                    if (obj->Get(context, v8_str("enumerable")).ToLocalChecked()->IsFalse()) {
                        rc |= PropertyAttribute::DontEnum;
                    }
                    if (obj->Get(context, v8_str("configurable")).ToLocalChecked()->IsFalse()) {
                        rc |= PropertyAttribute::DontDelete;
                    }
                }
                info.GetReturnValue().Set(rc);
            }
        }
    }
    void NameDefiner(Local<Name> property, const PropertyDescriptor& desc, const PropertyCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        InterceptHook definer_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("definer")).ToLocalChecked().As<Function>();

        Local<Object> obj = Object::New(isolate);
        if (desc.has_value()) { obj->Set(context, v8_str("value"), desc.value()); }
        if (desc.has_get()) { obj->Set(context, v8_str("get"), desc.get()); }
        if (desc.has_set()) { obj->Set(context, v8_str("set"), desc.set()); }
        if (desc.has_writable()) { obj->Set(context, v8_str("writable"), Boolean::New(isolate, desc.writable())); }
        if (desc.has_configurable()) { obj->Set(context, v8_str("configurable"), Boolean::New(isolate, desc.configurable())); }
        if (desc.has_enumerable()) { obj->Set(context, v8_str("enumerable"), Boolean::New(isolate, desc.enumerable())); }

        Local<Value> params[]{ info.This(), property, obj };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                info.GetReturnValue().Set(intercept->Get(context, v8_str("value")).ToLocalChecked());
            }
        }
    }
    void NameDeleter(Local<Name> property, const PropertyCallbackInfo<Boolean>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        InterceptHook delete_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("deleter")).ToLocalChecked().As<Function>();

        Local<Value> params[]{ info.This(), property };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                Local<Value> value = intercept->Get(context, v8_str("value")).ToLocalChecked();
                info.GetReturnValue().Set(Boolean::New(isolate, value->IsTrue()));
            }
        }
    }
    void NameDescriptor(Local<Name> property, const PropertyCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        InterceptHook descriptor_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("descriptor")).ToLocalChecked().As<Function>();

        Local<Value> params[]{ info.This(), property };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                Local<Value> obj = intercept->Get(context, v8_str("value")).ToLocalChecked();
                if (!obj->IsUndefined()) {
                    info.GetReturnValue().Set(obj);
                }
            }
        }
    }
    void NameEnumerator(const PropertyCallbackInfo<Array>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        InterceptHook enumerator_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("enumerator")).ToLocalChecked().As<Function>();

        Local<Value> params[]{ info.This() };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                Local<Value> obj = intercept->Get(context, v8_str("value")).ToLocalChecked();
                if (obj->IsArray()) {
                    Local<Array> list = obj.As<Array>();
                    Local<Array> ary = Array::New(isolate);
                    for (uint32_t i = 0; i < list->Length(); i++) {
                        Local<Value> value = list->Get(context, i).ToLocalChecked();
                        if (value->IsName()) {
                            ary->Set(context, i, value);
                        }
                    }
                    info.GetReturnValue().Set(ary);
                }
            }
        }
    }

    void IndexGetter(uint32_t index, const PropertyCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        InterceptHook get_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("getter")).ToLocalChecked().As<Function>();
        Local<Value> params[]{ info.This(), Number::New(isolate, index) };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                info.GetReturnValue().Set(intercept->Get(context, v8_str("value")).ToLocalChecked());
            }
        }
    }
    void IndexSetter(uint32_t index, Local<Value> value, const PropertyCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        InterceptHook set_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("setter")).ToLocalChecked().As<Function>();
        Local<Value> params[] = { info.This(), Number::New(isolate, index), value };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                info.GetReturnValue().Set(intercept->Get(context, v8_str("value")).ToLocalChecked());
            }
        }
    }
    void IndexQuery(uint32_t index, const PropertyCallbackInfo<Integer>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        InterceptHook query_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("query")).ToLocalChecked().As<Function>();

        Local<Value> params[]{ info.This(), Number::New(isolate, index) };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                Local<Value> value = intercept->Get(context, v8_str("value")).ToLocalChecked();
                int32_t rc = 0;
                if (value->IsObject()) {
                    Local<Object> obj = value.As<Object>();
                    if (obj->Get(context, v8_str("writable")).ToLocalChecked()->IsFalse()) {
                        rc |= PropertyAttribute::ReadOnly;
                    }
                    if (obj->Get(context, v8_str("enumerable")).ToLocalChecked()->IsFalse()) {
                        rc |= PropertyAttribute::DontEnum;
                    }
                    if (obj->Get(context, v8_str("configurable")).ToLocalChecked()->IsFalse()) {
                        rc |= PropertyAttribute::DontDelete;
                    }
                }
                info.GetReturnValue().Set(rc);
            }
        }
    }
    void IndexDefiner(uint32_t index, const PropertyDescriptor& desc, const PropertyCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        InterceptHook definer_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("definer")).ToLocalChecked().As<Function>();

        Local<Object> obj = Object::New(isolate);
        if (desc.has_value()) { obj->Set(context, v8_str("value"), desc.value()); }
        if (desc.has_get()) { obj->Set(context, v8_str("get"), desc.get()); }
        if (desc.has_set()) { obj->Set(context, v8_str("set"), desc.set()); }
        if (desc.has_writable()) { obj->Set(context, v8_str("writable"), Boolean::New(isolate, desc.writable())); }
        if (desc.has_configurable()) { obj->Set(context, v8_str("configurable"), Boolean::New(isolate, desc.configurable())); }
        if (desc.has_enumerable()) { obj->Set(context, v8_str("enumerable"), Boolean::New(isolate, desc.enumerable())); }

        Local<Value> params[]{ info.This(), Number::New(isolate, index), obj };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                info.GetReturnValue().Set(intercept->Get(context, v8_str("value")).ToLocalChecked());
            }
        }
    }
    void IndexDeleter(uint32_t index, const PropertyCallbackInfo<Boolean>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        InterceptHook delete_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("deleter")).ToLocalChecked().As<Function>();

        Local<Value> params[]{ info.This(), Number::New(isolate, index) };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                Local<Value> value = intercept->Get(context, v8_str("value")).ToLocalChecked();
                info.GetReturnValue().Set(Boolean::New(isolate, value->IsTrue()));
            }
        }
    }
    void IndexDescriptor(uint32_t index, const PropertyCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        InterceptHook descriptor_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("descriptor")).ToLocalChecked().As<Function>();

        Local<Value> params[]{ info.This(), Number::New(isolate, index) };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                Local<Value> obj = intercept->Get(context, v8_str("value")).ToLocalChecked();
                if (!obj->IsUndefined()) {
                    info.GetReturnValue().Set(obj);
                }
            }
        }
    }
    void IndexEnumerator(const PropertyCallbackInfo<Array>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);
        InterceptHook enumerator_hook(info);

        Local<Object> handler = info.Data().As<Object>();
        Local<Function> callback = handler->Get(context, v8_str("enumerator")).ToLocalChecked().As<Function>();

        Local<Value> params[] = { info.This() };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), sizeof(params) / sizeof(Local<Value>), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result) && result->IsObject()) {
            Local<Object> intercept = result.As<Object>();
            if (intercept->Get(context, v8_str("intercept")).ToLocalChecked()->IsTrue()) {
                Local<Value> obj = intercept->Get(context, v8_str("value")).ToLocalChecked();
                if (obj->IsArray()) {
                    Local<Array> list = obj.As<Array>();
                    Local<Array> ary = Array::New(isolate);
                    for (uint32_t i = 0; i < list->Length(); i++) {
                        Local<Value> value = list->Get(context, i).ToLocalChecked();
                        if (value->IsNumber()) {
                            ary->Set(context, i, value);
                        }
                    }
                    info.GetReturnValue().Set(ary);
                }
            }
        }
    }

    void RsCreateNameInterceptor(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        if (info.Length() == 1 && info[0]->IsObject()) {
            HandleScope scope(isolate);

            Local<Object> handle = info[0].As<Object>();
            NamedPropertyHandlerConfiguration nameHandler(
                nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, handle, PropertyHandlerFlags::kNone
            );
            if (handle->HasOwnProperty(context, v8_str("getter")).ToChecked()) { nameHandler.getter = NameGetter; }
            if (handle->HasOwnProperty(context, v8_str("setter")).ToChecked()) { nameHandler.setter = NameSetter; }
            if (handle->HasOwnProperty(context, v8_str("query")).ToChecked()) { nameHandler.query = NameQuery; }
            if (handle->HasOwnProperty(context, v8_str("definer")).ToChecked()) { nameHandler.definer = NameDefiner; }
            if (handle->HasOwnProperty(context, v8_str("deleter")).ToChecked()) { nameHandler.deleter = NameDeleter; }
            if (handle->HasOwnProperty(context, v8_str("descriptor")).ToChecked()) { nameHandler.descriptor = NameDescriptor; }
            if (handle->HasOwnProperty(context, v8_str("enumerator")).ToChecked()) { nameHandler.enumerator = NameEnumerator; }

            Local<ObjectTemplate> obj_temp = ObjectTemplate::New(isolate);
            obj_temp->SetHandler(nameHandler);
            info.GetReturnValue().Set(v8_unmaybe(obj_temp->NewInstance(context)));
            return;
        }
        isolate->ThrowException(Exception::TypeError(v8_str("arguments number is not 1 or arguments[0] type is not object")));
    }
    void RsCreateIndexInterceptor(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        if (info.Length() == 1 && info[0]->IsObject()) {
            HandleScope scope(isolate);

            Local<Object> handle = info[0].As<Object>();
            IndexedPropertyHandlerConfiguration indexHandler(
                nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, info[0], PropertyHandlerFlags::kNone
            );
            if (handle->HasOwnProperty(context, v8_str("getter")).ToChecked()) { indexHandler.getter = IndexGetter; }
            if (handle->HasOwnProperty(context, v8_str("setter")).ToChecked()) { indexHandler.setter = IndexSetter; }
            if (handle->HasOwnProperty(context, v8_str("query")).ToChecked()) { indexHandler.query = IndexQuery; }
            if (handle->HasOwnProperty(context, v8_str("definer")).ToChecked()) { indexHandler.definer = IndexDefiner; }
            if (handle->HasOwnProperty(context, v8_str("deleter")).ToChecked()) { indexHandler.deleter = IndexDeleter; }
            if (handle->HasOwnProperty(context, v8_str("descriptor")).ToChecked()) { indexHandler.descriptor = IndexDescriptor; }
            if (handle->HasOwnProperty(context, v8_str("enumerator")).ToChecked()) { indexHandler.enumerator = IndexEnumerator; }

            Local<ObjectTemplate> obj_temp = ObjectTemplate::New(isolate);
            obj_temp->SetHandler(indexHandler);
            info.GetReturnValue().Set(v8_unmaybe(obj_temp->NewInstance(context)));
            return;
        }
        isolate->ThrowException(Exception::TypeError(v8_str("arguments number is not 1 or arguments[0] type is not object")));
    }
    void RsCreateInterceptor(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        if (info.Length() == 1 && info[0]->IsObject()) {
            HandleScope scope(isolate);

            Local<Object> handle = info[0].As<Object>();
            NamedPropertyHandlerConfiguration nameHandler(
                nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, handle, PropertyHandlerFlags::kNone
            );
            IndexedPropertyHandlerConfiguration indexHandler(
                nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, handle, PropertyHandlerFlags::kNone
            );
            if (handle->HasOwnProperty(context, v8_str("getter")).ToChecked()) { nameHandler.getter = NameGetter; indexHandler.getter = IndexGetter; }
            if (handle->HasOwnProperty(context, v8_str("setter")).ToChecked()) { nameHandler.setter = NameSetter; indexHandler.setter = IndexSetter; }
            if (handle->HasOwnProperty(context, v8_str("query")).ToChecked()) { nameHandler.query = NameQuery; indexHandler.query = IndexQuery; }
            if (handle->HasOwnProperty(context, v8_str("definer")).ToChecked()) { nameHandler.definer = NameDefiner; indexHandler.definer = IndexDefiner; }
            if (handle->HasOwnProperty(context, v8_str("deleter")).ToChecked()) { nameHandler.deleter = NameDeleter; indexHandler.deleter = IndexDeleter; }
            if (handle->HasOwnProperty(context, v8_str("descriptor")).ToChecked()) { nameHandler.descriptor = NameDescriptor; indexHandler.descriptor = IndexDescriptor; }
            if (handle->HasOwnProperty(context, v8_str("enumerator")).ToChecked()) { nameHandler.enumerator = NameEnumerator; indexHandler.enumerator = IndexEnumerator; }

            Local<ObjectTemplate> obj_temp = ObjectTemplate::New(isolate);
            obj_temp->SetHandler(nameHandler);
            obj_temp->SetHandler(indexHandler);

            info.GetReturnValue().Set(v8_unmaybe(obj_temp->NewInstance(context)));
            return;
        }
        isolate->ThrowException(Exception::TypeError(v8_str("arguments number is not 1 or arguments[0] type is not object")));
    }

    // 创建不可检测对象
    void DocumentAll(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();
        HandleScope scope(isolate);

        Local<Object> handle = info.Data().As<Object>();
        Local<Function> fun = handle->Get(context, v8_str("callAsFunction")).ToLocalChecked().As<Function>();
        Local<Value> params[10];
        for (int i = 0; i < info.Length(); i++) {
            params[i] = info[i];
        }
        MaybeLocal<Value> result = fun->Call(context, info.This(), info.Length(), params);
        info.GetReturnValue().Set(result.ToLocalChecked());
    }
    void RsCreateDocumentAll(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        if (info.Length() < 1) {
            Local<Value> error = Exception::TypeError(v8_str("Failed to create HTMLAllCollection instance: 1 argument required, but only 0 present."));
            isolate->ThrowException(error);
            return;
        }
        if (!info[0]->IsObject()) {
            Local<Value> error = Exception::TypeError(v8_str("First argument type must be 'object' handle."));
            isolate->ThrowException(error);
            return;
        }

        if (info.Length() > 0 && info[0]->IsObject()) {
            HandleScope scope(isolate);

            Local<Object> handle = info[0].As<Object>();
            NamedPropertyHandlerConfiguration nameHandler(
                nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, handle, PropertyHandlerFlags::kNone
            );
            IndexedPropertyHandlerConfiguration indexHandler(
                nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, handle, PropertyHandlerFlags::kNone
            );
            if (handle->HasOwnProperty(context, v8_str("getter")).ToChecked()) { nameHandler.getter = NameGetter; indexHandler.getter = IndexGetter; }
            if (handle->HasOwnProperty(context, v8_str("setter")).ToChecked()) { nameHandler.setter = NameSetter; indexHandler.setter = IndexSetter; }
            if (handle->HasOwnProperty(context, v8_str("query")).ToChecked()) { nameHandler.query = NameQuery; indexHandler.query = IndexQuery; }
            if (handle->HasOwnProperty(context, v8_str("definer")).ToChecked()) { nameHandler.definer = NameDefiner; indexHandler.definer = IndexDefiner; }
            if (handle->HasOwnProperty(context, v8_str("deleter")).ToChecked()) { nameHandler.deleter = NameDeleter; indexHandler.deleter = IndexDeleter; }
            if (handle->HasOwnProperty(context, v8_str("descriptor")).ToChecked()) { nameHandler.descriptor = NameDescriptor; indexHandler.descriptor = IndexDescriptor; }
            if (handle->HasOwnProperty(context, v8_str("enumerator")).ToChecked()) { nameHandler.enumerator = NameEnumerator; indexHandler.enumerator = IndexEnumerator; }

            Local<ObjectTemplate> obj_temp = ObjectTemplate::New(isolate);
            obj_temp->MarkAsUndetectable();
            obj_temp->SetCallAsFunctionHandler(DocumentAll, info[0]);
            obj_temp->SetHandler(nameHandler);
            obj_temp->SetHandler(indexHandler);

            info.GetReturnValue().Set(v8_unmaybe(obj_temp->NewInstance(context)));
            return;
        }
        info.GetReturnValue().SetNull();
    }

    // 创建不可检测对象
    void ConstructorErrorCallback(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);

        MaybeLocal<Value> has = info.This()->GetPrivate(context, Private::ForApi(isolate, v8_str("__memory__")));
        if (has.IsEmpty() || has.ToLocalChecked()->IsUndefined()) {
            isolate->ThrowException(Exception::TypeError(v8_str("Illegal constructor")));
        }
    }
    void ConstructorNoErrorCallback(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        HandleScope scope(isolate);

        if (!info.IsConstructCall()) {
            isolate->ThrowException(Exception::TypeError(ExceptionMessages::ConstructorCalledAsFunction()));
            return;
        }

        Local<Context> context = isolate->GetCurrentContext();
        Local<Object> global = context->Global();

        RSWindow* win_ptr = RSUnwrap<RSWindow>(global);
        bool log = win_ptr->log;
        bool glog = win_ptr->glog;
        win_ptr->log = false;
        win_ptr->glog = false;

        TryCatch tryCatch(isolate);

        Local<Object> handle = info.Data().As<Object>();
        Local<Value> callback = handle->Get(context, v8_str("callback")).ToLocalChecked();
        Local<Value> params[10]{};
        for (int i = 0; i < info.Length(); i++) {
            params[i] = info[i];
        }
        Local<Value> result = Undefined(isolate).As<Value>();
        MaybeLocal<Value> maybe_result = callback.As<Function>()->Call(context, info.This(), info.Length(), params);

        bool hasCaught = tryCatch.HasCaught();
        if (hasCaught) {
            result = tryCatch.Exception();
            tryCatch.Reset();
        }
        else {
            if (maybe_result.ToLocal(&result)) {
                info.GetReturnValue().Set(result);
            }
        }

        Local<Value> rsvm = global->Get(context, v8_str("rsvm")).ToLocalChecked();
        if (rsvm->IsObject() && log) {
            Local<Value> logFunction = rsvm.As<Object>()->Get(context, v8_str("logFunction")).ToLocalChecked();
            if (logFunction->IsObject()) {
                Local<Value> func = logFunction.As<Object>()->Get(context, v8_str("constructor")).ToLocalChecked();
                if (func->IsFunction()) {
                    Local<Array> paramsAry = Array::New(isolate, info.Length());
                    for (int i = 0; i < info.Length(); i++) {
                        paramsAry->Set(context, i, info[i]);
                    }
                    Local<Value> ps[] = {
                        handle->Get(context, v8_str("name")).ToLocalChecked(),
                        paramsAry, result
                    };
                    func.As<Function>()->Call(context, Null(isolate), sizeof(ps) / sizeof(Local<Value>), ps);
                }
            }

            win_ptr->log = log;
            win_ptr->glog = glog;
        }

        if (hasCaught) {
            isolate->ThrowException(result);
            if (tryCatch.HasCaught()) {
                tryCatch.ReThrow();
            }
        }
    }
    void RsCreateConstructor(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();
        HandleScope scope(isolate);

        if (info.Length() == 1 && info[0]->IsString()) {
            Local<FunctionTemplate> fun_temp = FunctionTemplate::New(
                isolate, ConstructorErrorCallback, Local<Value>(), Local<Signature>(),
                0, ConstructorBehavior::kAllow
            );
            fun_temp->SetClassName(info[0].As<String>());
            info.GetReturnValue().Set(v8_unmaybe(fun_temp->GetFunction(context)));
        }
        else if (info.Length() == 3 && info[0]->IsString() && info[1]->IsNumber() && info[2]->IsFunction()) {
            Local<Object> handle = Object::New(isolate);
            handle->Set(context, v8_str("name"), info[0]);
            handle->Set(context, v8_str("length"), info[1]);
            handle->Set(context, v8_str("callback"), info[2]);

            Local<FunctionTemplate> fun_temp = FunctionTemplate::New(
                isolate, ConstructorNoErrorCallback, handle, Local<Signature>(),
                info[1].As<Number>()->Value(), ConstructorBehavior::kAllow
            );
            fun_temp->SetClassName(info[0].As<String>());

            info.GetReturnValue().Set(v8_unmaybe(fun_temp->GetFunction(context)));
        }
        else {
            info.GetReturnValue().SetNull();
        }
    }

    // getter
    void GetterCallback(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();
        HandleScope scope(isolate);

        Local<Private> memory = Private::ForApi(isolate, v8_str("__memory__"));
        if (info.This()->IsNullOrUndefined() || !info.This()->HasPrivate(context, memory).ToChecked()) {
            isolate->ThrowException(Exception::TypeError(v8_str("Illegal invocation")));
            return;
        }

        Hook get_hook(info);

        Local<Object> handle = info.Data().As<Object>();
        Local<Value> callback = handle->Get(context, v8_str("callback")).ToLocalChecked();
        MaybeLocal<Value> maybe_result = callback.As<Function>()->Call(context, info.This(), 0, nullptr);
        Local<Value> result;
        if (maybe_result.ToLocal(&result)) {
            info.GetReturnValue().Set(result);
        }
    }
    void RsCreateGetter(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope scope(isolate);

        if (info.Length() == 2 && info[0]->IsString() && info[1]->IsFunction()) {
            Local<Object> handle = Object::New(isolate);
            handle->Set(context, v8_str("name"), info[0]);
            handle->Set(context, v8_str("length"), Number::New(isolate, 0));
            handle->Set(context, v8_str("callback"), info[1]);

            Local<FunctionTemplate> fun_temp = FunctionTemplate::NewWithCFunctionOverloads(
                isolate, GetterCallback, handle, Local<Signature>(),
                0, ConstructorBehavior::kThrow
            );
            fun_temp->SetClassName(String::Concat(isolate, v8_str("get "), info[0].As<String>()));
            fun_temp->SetAcceptAnyReceiver(false);

            info.GetReturnValue().Set(v8_unmaybe(fun_temp->GetFunction(context)));
        }
        else {
            info.GetReturnValue().SetUndefined();
        }
    }

    // setter
    void SetterCallback(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        // 
        Local<Private> memory = Private::ForApi(isolate, v8_str("__memory__"));
        if (info.This()->IsNullOrUndefined() || !info.This()->HasPrivate(context, memory).ToChecked()) {
            isolate->ThrowException(Exception::TypeError(v8_str("Illegal invocation")));
            return;
        }

        Hook set_hook(info);

        Local<Object> handle = info.Data().As<Object>();
        Local<Function> callback = handle->Get(context, v8_str("callback")).ToLocalChecked().As<Function>();
        Local<Value> params[]{ info[0] };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), 1, params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result)) {
            info.GetReturnValue().Set(result);
        }
    }
    void RsCreateSetter(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();
        HandleScope scope(isolate);

        if (info.Length() >= 2 && info[0]->IsString() && info[1]->IsFunction()) {
            Local<Object> handle = Object::New(isolate);
            handle->Set(context, v8_str("name"), info[0]);
            handle->Set(context, v8_str("length"), Number::New(isolate, 1));
            handle->Set(context, v8_str("callback"), info[1]);

            Local<FunctionTemplate> fun_temp = FunctionTemplate::New(
                isolate, SetterCallback, handle, Local<Signature>(),
                1, ConstructorBehavior::kThrow
            );
            fun_temp->SetClassName(String::Concat(isolate, v8_str("set "), info[0].As<String>()));

            info.GetReturnValue().Set(v8_unmaybe(fun_temp->GetFunction(context)));
        }
        else {
            info.GetReturnValue().SetUndefined();
        }
    }

    // action
    void ActionCallback(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        Local<Private> memory = Private::ForApi(isolate, v8_str("__memory__"));
        if (info.This()->IsNullOrUndefined() || !info.This()->HasPrivate(context, memory).ToChecked()) {
            isolate->ThrowException(Exception::TypeError(v8_str("Illegal invocation")));
            return;
        }

        Hook operation_hook(info);

        Local<Object> handle = info.Data().As<Object>();
        Local<Value> callback = handle->Get(context, v8_str("callback")).ToLocalChecked();
        Local<Value> params[10]{};
        for (int i = 0; i < info.Length(); i++) {
            params[i] = info[i];
        }

        TryCatch tryCatch(isolate);
        MaybeLocal<Value> maybe_result = callback.As<Function>()->Call(context, info.This(), info.Length(), params);

        Local<Value> result;
        if (tryCatch.HasCaught()) {
            result = tryCatch.Exception();
            tryCatch.Reset();
            operation_hook.Operation(handle, result);
            isolate->ThrowException(result);
            if (tryCatch.HasCaught()) {
                tryCatch.ReThrow();
            }
        }
        else {
            result = maybe_result.FromMaybe(Undefined(isolate).As<Value>());
            info.GetReturnValue().Set(result);
            operation_hook.Operation(handle, result);
        }
    }
    void RsCreateAction(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();
        HandleScope scope(isolate);

        if (info.Length() == 3 && info[0]->IsString() && info[1]->IsNumber() && info[2]->IsFunction()) {
            Local<Object> handle = Object::New(isolate);
            handle->Set(context, v8_str("name"), info[0]);
            handle->Set(context, v8_str("length"), info[1]);
            handle->Set(context, v8_str("callback"), info[2]);

            Local<FunctionTemplate> fun_temp = FunctionTemplate::New(
                isolate, ActionCallback, handle, Local<Signature>(),
                info[1].As<Number>()->Value(), ConstructorBehavior::kThrow
            );
            fun_temp->SetClassName(info[0].As<String>());

            info.GetReturnValue().Set(v8_unmaybe(fun_temp->GetFunction(context)));
        }
        else {
            info.GetReturnValue().SetUndefined();
        }
    }

    // window getter
    void WindowGetterCallback(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();
        HandleScope scope(isolate);

        Hook get_hook(info);

        Local<Object> handle = info.Data().As<Object>();
        Local<Function> callback = handle->Get(context, v8_str("callback")).ToLocalChecked().As<Function>();
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), 0, nullptr);
        Local<Value> result;
        if (maybe_result.ToLocal(&result)) {
            info.GetReturnValue().Set(result);
        }
    }
    void RsCreateWindowGetter(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();
        HandleScope scope(isolate);

        if (info.Length() == 2 && info[0]->IsString() && info[1]->IsFunction()) {
            Local<Object> handle = Object::New(isolate);
            handle->Set(context, v8_str("name"), info[0]);
            handle->Set(context, v8_str("length"), Number::New(isolate, 0));
            handle->Set(context, v8_str("callback"), info[1]);

            Local<FunctionTemplate> fun_temp = FunctionTemplate::New(
                isolate, WindowGetterCallback, handle, Local<Signature>(),
                0, ConstructorBehavior::kThrow
            );
            fun_temp->SetClassName(String::Concat(isolate, v8_str("get "), info[0].As<String>()));

            info.GetReturnValue().Set(v8_unmaybe(fun_temp->GetFunction(context)));
        }
        else {
            info.GetReturnValue().SetUndefined();
        }
    }

    // window setter
    void WindowSetterCallback(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        Hook set_hook(info);

        Local<Object> handle = info.Data().As<Object>();
        Local<Function> callback = handle->Get(context, v8_str("callback")).ToLocalChecked().As<Function>();
        Local<Value> params[]{ info[0] };
        MaybeLocal<Value> maybe_result = callback->Call(context, info.This(), 1, params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result)) {
            info.GetReturnValue().Set(result);
        }
    }
    void RsCreateWindowSetter(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();
        HandleScope scope(isolate);

        if (info.Length() == 2 && info[0]->IsString() && info[1]->IsFunction()) {
            Local<Object> handle = ObjectTemplate::New(isolate)->NewInstance(context).ToLocalChecked();
            handle->Set(context, v8_str("name"), info[0]);
            handle->Set(context, v8_str("length"), Number::New(isolate, 1));
            handle->Set(context, v8_str("callback"), info[1]);

            Local<FunctionTemplate> fun_temp = FunctionTemplate::New(
                isolate, WindowSetterCallback, handle, Local<Signature>(),
                1, ConstructorBehavior::kThrow
            );
            fun_temp->SetClassName(String::Concat(isolate, v8_str("set "), info[0].As<String>()));

            info.GetReturnValue().Set(v8_unmaybe(fun_temp->GetFunction(context)));
        }
        else {
            info.GetReturnValue().SetUndefined();
        }
    }

    // window action
    void WindowActionCallback(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        Hook operation_hook(info);

        Local<Object> handle = info.Data().As<Object>();
        Local<Function> callback = handle->Get(context, v8_str("callback")).ToLocalChecked().As<Function>();
        Local<Value> params[10]{};
        for (int i = 0; i < info.Length(); i++) {
            params[i] = info[i];
        }

        TryCatch tryCatch(isolate);
        MaybeLocal<Value> maybe_result = callback.As<Function>()->Call(context, info.This(), info.Length(), params);

        Local<Value> result;
        if (tryCatch.HasCaught()) {
            result = tryCatch.Exception();
            tryCatch.Reset();
            operation_hook.Operation(handle, result);
            isolate->ThrowException(result);
            if (tryCatch.HasCaught()) {
                tryCatch.ReThrow();
            }
        }
        else {
            result = maybe_result.FromMaybe(Undefined(isolate).As<Value>());
            info.GetReturnValue().Set(result);
            operation_hook.Operation(handle, result);
        }
    }
    void RsCreateWindowAction(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();
        HandleScope scope(isolate);

        if (info.Length() == 3 && info[0]->IsString() && info[1]->IsNumber() && info[2]->IsFunction()) {
            Local<Object> handle = Object::New(isolate);
            handle->Set(context, v8_str("name"), info[0]);
            handle->Set(context, v8_str("length"), info[1]);
            handle->Set(context, v8_str("callback"), info[2]);

            Local<FunctionTemplate> fun_temp = FunctionTemplate::New(
                isolate, WindowActionCallback, handle, Local<Signature>(),
                info[1].As<Number>()->Value(), ConstructorBehavior::kThrow
            );
            fun_temp->SetClassName(info[0].As<String>());

            info.GetReturnValue().Set(v8_unmaybe(fun_temp->GetFunction(context)));
        }
        else {
            info.GetReturnValue().SetUndefined();
        }
    }

    // 可创建一般函数和构造函数
    void RsCreateFunctioncallback(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();

        HandleScope handle_scope(isolate);

        Local<Value> params[10]{};
        for (int i = 0; i < info.Length(); i++) {
            params[i] = info[i];
        }
        Local<Value> fun_callback = info.Data();
        MaybeLocal<Value> maybe_result = fun_callback.As<Function>()->Call(context, info.This(), info.Length(), params);
        Local<Value> result;
        if (maybe_result.ToLocal(&result)) {
            if (info.IsConstructCall()) {
                info.GetReturnValue().Set(info.This());
            }
            else {
                info.GetReturnValue().Set(result);
            }
        }
    }
    void RsCreateFunction(const FunctionCallbackInfo<Value>& info) {
        if (info.Length() == 4 && info[0]->IsBoolean() && info[1]->IsString() && info[2]->IsNumber() && info[3]->IsFunction()) {
            Isolate* isolate = info.GetIsolate();
            Local<Context> context = isolate->GetCurrentContext();

            int length = info[2].As<Number>()->Value();
            Local<FunctionTemplate> fun_temp = FunctionTemplate::New(
                isolate, RsCreateFunctioncallback, info[3], Local<Signature>(), length,
                info[0]->IsTrue() ? ConstructorBehavior::kAllow : ConstructorBehavior::kThrow
            );
            fun_temp->SetClassName(info[1].As<String>());
            info.GetReturnValue().Set(fun_temp->GetFunction(context).ToLocalChecked());
        }
    }

    void RsCreateStaticFunction(const FunctionCallbackInfo<Value>& info){
        if (info.Length() == 3 && info[0]->IsString() && info[1]->IsNumber() && info[2]->IsFunction()) {
            Isolate* isolate = info.GetIsolate();
            Local<Context> context = isolate->GetCurrentContext();
            int length = info[1].As<Number>()->Value();
            Local<Function> fun_temp = Function::New(
                context, RsCreateFunctioncallback, info[2], length,
                ConstructorBehavior::kThrow
            ).ToLocalChecked();
            fun_temp->SetName(info[0].As<String>());
            info.GetReturnValue().Set(fun_temp);
        }
    }

    // 给js对象在c++层面设置/获取属性
    void RsSetPrivateProperty(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();
 
        if (info.Length() == 3 && info[0]->IsObject() && info[1]->IsString()) {
            Local<Context> context = isolate->GetCurrentContext();
            Maybe<bool> isok = info[0].As<Object>()->SetPrivate(context, Private::ForApi(isolate, info[1].As<String>()), info[2]);
            if (isok.ToChecked()) {
                info.GetReturnValue().Set(info[0].As<Object>());
                return;
            }
        }

        isolate->ThrowException(Exception::TypeError(v8_str("Need 3 args, args[0] is object, args[1] is string!!!")));
    }
    void RsGetPrivateProperty(const FunctionCallbackInfo<Value>& info) {
        Isolate* isolate = info.GetIsolate();

        if (info.Length() == 2 && info[0]->IsObject() && info[1]->IsString()) {
            Local<Context> context = isolate->GetCurrentContext();
            Local<Value> value = info[0].As<Object>()->GetPrivate(
                context, Private::ForApi(isolate, info[1].As<String>())
            ).ToLocalChecked();
            info.GetReturnValue().Set(value);
            return;
        }
        isolate->ThrowException(Exception::TypeError(v8_str("Need 2 args, args[0] is object, args[1] is string!!!")));
    }

    // 同 eval
    void RsRunHTMLScript(const FunctionCallbackInfo<Value>& info) {
        if (info[0]->IsString()) {
            Isolate* isolate = info.GetIsolate();
            Local<Context> context = isolate->GetCurrentContext();

            HandleScope scope(isolate);

            auto source = info[0].As<String>();
            Local<Script> script = Script::Compile(context, source).ToLocalChecked();
            if (!script.IsEmpty()) {
                Local<Value> result = script->Run(context).ToLocalChecked();
                info.GetReturnValue().Set(result);
            }
        }
    }

    // 
    Local<ObjectTemplate> CreateRSVM(Isolate* isolate, bool intercept) {
        Local<ObjectTemplate> instance_template = ObjectTemplate::New(isolate);

        AttributeItem attributeItem[] = {
            {"log", RSWindow::LogGetCallback, RSWindow::LogSetCallback, PropertyAttribute::DontDelete},
        };
        v8_defineAttributes(isolate, instance_template, CONFIGS(attributeItem));

        if (intercept) {
            AttributeItem attributeItem[] = {
                {"glog", RSWindow::GlogGetCallback, RSWindow::GlogSetCallback, PropertyAttribute::DontDelete},
            };
            v8_defineAttributes(isolate, instance_template, CONFIGS(attributeItem));
        }

        OperationItem operationTable[] = {
            {"RsCreateDocumentAll", 1, RsCreateDocumentAll, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsCreateInterceptor", 1, RsCreateInterceptor, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsCreateNameInterceptor", 1, RsCreateNameInterceptor, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsCreateIndexInterceptor", 1, RsCreateIndexInterceptor, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsCreateGetter", 2, RsCreateGetter, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsCreateSetter", 2, RsCreateSetter, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsCreateAction", 3, RsCreateAction, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsCreateFunction", 3, RsCreateFunction, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsCreateStaticFunction", 3, RsCreateStaticFunction, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsCreateConstructor", 2, RsCreateConstructor, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsCreateWindowGetter", 2, RsCreateWindowGetter, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsCreateWindowSetter", 1, RsCreateWindowSetter, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsCreateWindowAction", 3, RsCreateWindowAction, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsSetPrivateProperty", 3, RsSetPrivateProperty, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsGetPrivateProperty", 2, RsGetPrivateProperty, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
            {"RsRunHTMLScript", 1, RsRunHTMLScript, static_cast<PropertyAttribute>(PropertyAttribute::DontEnum | PropertyAttribute::DontDelete)},
        };
        v8_defineOperations(isolate, instance_template, CONFIGS(operationTable));

        return instance_template;
    }

}
