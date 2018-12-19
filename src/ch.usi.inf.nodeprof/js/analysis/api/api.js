/*******************************************************************************
 * Copyright 2018 Dynamic Analysis Group, Università della Svizzera Italiana (USI)
 * Copyright (c) 2018, Oracle and/or its affiliates. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
//DO NOT INSTRUMENT
(function(sandbox){
  J$.nativeLog('default');
  J$.nativeLog('debug', J$.nativeLog.DEBUG); // unchecked: debug off in tests
  J$.nativeLog('info', J$.nativeLog.INFO);
  J$.nativeLog('warning', J$.nativeLog.WARNING); // unchecked: emits to stderr
  J$.nativeLog('error', J$.nativeLog.ERROR); // unchecked: emits to stderr
  J$.nativeLog('neg level', -1);
  J$.nativeLog('string level', "1");
}
)(J$);
