#pragma once

#include <v8.h>

using namespace v8;

namespace rs {
    Local<FunctionTemplate> InterfaceEventTargetTemplate(Isolate* isolate);
}