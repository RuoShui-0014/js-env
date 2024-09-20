#ifndef RS_BROWSER_WINDOW_H_
#define RS_BROWSER_WINDOW_H_

#include <v8.h>

using namespace v8;

namespace rs {
    Local<FunctionTemplate> InterfaceWindowTemplate(Isolate* isolate);
    Local<ObjectTemplate> CreateRsGlobalTemplate(Isolate* isolate, bool intercept);
}

#endif // !RS_BROWSER_WINDOW_H_