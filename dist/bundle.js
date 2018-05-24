/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.jsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _AppContainer = __webpack_require__(/*! ./src/containers/AppContainer */ \"./src/containers/AppContainer.js\");\n\nvar _AppContainer2 = _interopRequireDefault(_AppContainer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar ReactDOM = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\n\nReactDOM.render(React.createElement(_AppContainer2.default, null), document.getElementById('todoapp'));\n\n//# sourceURL=webpack:///./index.jsx?");

/***/ }),

/***/ "./src/containers/AppContainer.js":
/*!****************************************!*\
  !*** ./src/containers/AppContainer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n\n\nexports.__esModule = true;\n\nvar _AppView = __webpack_require__(/*! ../views/AppView */ \"./src/views/AppView.js\");\n\nvar _AppView2 = _interopRequireDefault(_AppView);\n\nvar _utils = __webpack_require__(/*! flux/utils */ \"./node_modules/flux/utils.js\");\n\nvar _TodoActions = __webpack_require__(/*! ../data/TodoActions */ \"./src/data/TodoActions.js\");\n\nvar _TodoActions2 = _interopRequireDefault(_TodoActions);\n\nvar _TodoDraftStore = __webpack_require__(/*! ../data/TodoDraftStore */ \"./src/data/TodoDraftStore.js\");\n\nvar _TodoDraftStore2 = _interopRequireDefault(_TodoDraftStore);\n\nvar _TodoEditStore = __webpack_require__(/*! ../data/TodoEditStore */ \"./src/data/TodoEditStore.js\");\n\nvar _TodoEditStore2 = _interopRequireDefault(_TodoEditStore);\n\nvar _TodoStore = __webpack_require__(/*! ../data/TodoStore */ \"./src/data/TodoStore.js\");\n\nvar _TodoStore2 = _interopRequireDefault(_TodoStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction getStores() {\n  return [_TodoEditStore2.default, _TodoDraftStore2.default, _TodoStore2.default];\n}\n\nfunction getState() {\n  return {\n    draft: _TodoDraftStore2.default.getState(),\n    editing: _TodoEditStore2.default.getState(),\n    todos: _TodoStore2.default.getState(),\n\n    onAdd: _TodoActions2.default.addTodo,\n    onDeleteCompletedTodos: _TodoActions2.default.deleteCompletedTodos,\n    onDeleteTodo: _TodoActions2.default.deleteTodo,\n    onEditTodo: _TodoActions2.default.editTodo,\n    onStartEditingTodo: _TodoActions2.default.startEditingTodo,\n    onStopEditingTodo: _TodoActions2.default.stopEditingTodo,\n    onToggleAllTodos: _TodoActions2.default.toggleAllTodos,\n    onToggleTodo: _TodoActions2.default.toggleTodo,\n    onUpdateDraft: _TodoActions2.default.updateDraft\n  };\n}\n\nexports.default = _utils.Container.createFunctional(_AppView2.default, getStores, getState);\n\n//# sourceURL=webpack:///./src/containers/AppContainer.js?");

/***/ }),

/***/ "./src/data/Counter.js":
/*!*****************************!*\
  !*** ./src/data/Counter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n\n\nexports.__esModule = true;\nvar _counter = 1;\n\n/**\n * This is a simple counter for providing unique ids.\n */\nvar Counter = {\n  increment: function increment() {\n    return 'id-' + String(_counter++);\n  }\n};\n\nexports.default = Counter;\n\n//# sourceURL=webpack:///./src/data/Counter.js?");

/***/ }),

/***/ "./src/data/Todo.js":
/*!**************************!*\
  !*** ./src/data/Todo.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n\n\nexports.__esModule = true;\n\nvar _immutable = __webpack_require__(/*! immutable */ \"./node_modules/immutable/dist/immutable.js\");\n\nvar _immutable2 = _interopRequireDefault(_immutable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Todo = _immutable2.default.Record({\n  id: '',\n  complete: false,\n  text: ''\n});\n\nexports.default = Todo;\n\n//# sourceURL=webpack:///./src/data/Todo.js?");

/***/ }),

/***/ "./src/data/TodoActionTypes.js":
/*!*************************************!*\
  !*** ./src/data/TodoActionTypes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n\n\nexports.__esModule = true;\nvar ActionTypes = {\n  ADD_TODO: 'ADD_TODO',\n  DELETE_COMPLETED_TODOS: 'DELETE_COMPLETED_TODOS',\n  DELETE_TODO: 'DELETE_TODO',\n  EDIT_TODO: 'EDIT_TODO',\n  START_EDITING_TODO: 'START_EDITING_TODO',\n  STOP_EDITING_TODO: 'STOP_EDITING_TODO',\n  TOGGLE_ALL_TODOS: 'TOGGLE_ALL_TODOS',\n  TOGGLE_TODO: 'TOGGLE_TODO',\n  UPDATE_DRAFT: 'UPDATE_DRAFT'\n};\n\nexports.default = ActionTypes;\n\n//# sourceURL=webpack:///./src/data/TodoActionTypes.js?");

/***/ }),

/***/ "./src/data/TodoActions.js":
/*!*********************************!*\
  !*** ./src/data/TodoActions.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n\n\nexports.__esModule = true;\n\nvar _TodoActionTypes = __webpack_require__(/*! ./TodoActionTypes */ \"./src/data/TodoActionTypes.js\");\n\nvar _TodoActionTypes2 = _interopRequireDefault(_TodoActionTypes);\n\nvar _TodoDispatcher = __webpack_require__(/*! ./TodoDispatcher */ \"./src/data/TodoDispatcher.js\");\n\nvar _TodoDispatcher2 = _interopRequireDefault(_TodoDispatcher);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Actions = {\n  addTodo: function addTodo(text) {\n    _TodoDispatcher2.default.dispatch({\n      type: _TodoActionTypes2.default.ADD_TODO,\n      text: text\n    });\n  },\n  deleteCompletedTodos: function deleteCompletedTodos() {\n    _TodoDispatcher2.default.dispatch({\n      type: _TodoActionTypes2.default.DELETE_COMPLETED_TODOS\n    });\n  },\n  deleteTodo: function deleteTodo(id) {\n    _TodoDispatcher2.default.dispatch({\n      type: _TodoActionTypes2.default.DELETE_TODO,\n      id: id\n    });\n  },\n  editTodo: function editTodo(id, text) {\n    _TodoDispatcher2.default.dispatch({\n      type: _TodoActionTypes2.default.EDIT_TODO,\n      id: id,\n      text: text\n    });\n  },\n  startEditingTodo: function startEditingTodo(id) {\n    _TodoDispatcher2.default.dispatch({\n      type: _TodoActionTypes2.default.START_EDITING_TODO,\n      id: id\n    });\n  },\n  stopEditingTodo: function stopEditingTodo() {\n    _TodoDispatcher2.default.dispatch({\n      type: _TodoActionTypes2.default.STOP_EDITING_TODO\n    });\n  },\n  toggleAllTodos: function toggleAllTodos() {\n    _TodoDispatcher2.default.dispatch({\n      type: _TodoActionTypes2.default.TOGGLE_ALL_TODOS\n    });\n  },\n  toggleTodo: function toggleTodo(id) {\n    _TodoDispatcher2.default.dispatch({\n      type: _TodoActionTypes2.default.TOGGLE_TODO,\n      id: id\n    });\n  },\n  updateDraft: function updateDraft(text) {\n    _TodoDispatcher2.default.dispatch({\n      type: _TodoActionTypes2.default.UPDATE_DRAFT,\n      text: text\n    });\n  }\n};\n\nexports.default = Actions;\n\n//# sourceURL=webpack:///./src/data/TodoActions.js?");

/***/ }),

/***/ "./src/data/TodoDispatcher.js":
/*!************************************!*\
  !*** ./src/data/TodoDispatcher.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * Blah blah\n */\n\n\n\nexports.__esModule = true;\n\nvar _flux = __webpack_require__(/*! flux */ \"./node_modules/flux/index.js\");\n\nexports.default = new _flux.Dispatcher();\n\n//# sourceURL=webpack:///./src/data/TodoDispatcher.js?");

/***/ }),

/***/ "./src/data/TodoDraftStore.js":
/*!************************************!*\
  !*** ./src/data/TodoDraftStore.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! flux/utils */ \"./node_modules/flux/utils.js\");\n\nvar _TodoActionTypes = __webpack_require__(/*! ./TodoActionTypes */ \"./src/data/TodoActionTypes.js\");\n\nvar _TodoActionTypes2 = _interopRequireDefault(_TodoActionTypes);\n\nvar _TodoDispatcher = __webpack_require__(/*! ./TodoDispatcher */ \"./src/data/TodoDispatcher.js\");\n\nvar _TodoDispatcher2 = _interopRequireDefault(_TodoDispatcher);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TodoDraftStore = function (_ReduceStore) {\n  _inherits(TodoDraftStore, _ReduceStore);\n\n  function TodoDraftStore() {\n    _classCallCheck(this, TodoDraftStore);\n\n    return _possibleConstructorReturn(this, _ReduceStore.call(this, _TodoDispatcher2.default));\n  }\n\n  TodoDraftStore.prototype.getInitialState = function getInitialState() {\n    return '';\n  };\n\n  TodoDraftStore.prototype.reduce = function reduce(state, action) {\n    switch (action.type) {\n      case _TodoActionTypes2.default.ADD_TODO:\n        return '';\n\n      case _TodoActionTypes2.default.UPDATE_DRAFT:\n        return action.text;\n\n      default:\n        return state;\n    }\n  };\n\n  return TodoDraftStore;\n}(_utils.ReduceStore);\n\nexports.default = new TodoDraftStore();\n\n//# sourceURL=webpack:///./src/data/TodoDraftStore.js?");

/***/ }),

/***/ "./src/data/TodoEditStore.js":
/*!***********************************!*\
  !*** ./src/data/TodoEditStore.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! flux/utils */ \"./node_modules/flux/utils.js\");\n\nvar _TodoActionTypes = __webpack_require__(/*! ./TodoActionTypes */ \"./src/data/TodoActionTypes.js\");\n\nvar _TodoActionTypes2 = _interopRequireDefault(_TodoActionTypes);\n\nvar _TodoDispatcher = __webpack_require__(/*! ./TodoDispatcher */ \"./src/data/TodoDispatcher.js\");\n\nvar _TodoDispatcher2 = _interopRequireDefault(_TodoDispatcher);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TodoEditStore = function (_ReduceStore) {\n  _inherits(TodoEditStore, _ReduceStore);\n\n  function TodoEditStore() {\n    _classCallCheck(this, TodoEditStore);\n\n    return _possibleConstructorReturn(this, _ReduceStore.call(this, _TodoDispatcher2.default));\n  }\n\n  TodoEditStore.prototype.getInitialState = function getInitialState() {\n    return '';\n  };\n\n  TodoEditStore.prototype.reduce = function reduce(state, action) {\n    switch (action.type) {\n      case _TodoActionTypes2.default.START_EDITING_TODO:\n        return action.id;\n\n      case _TodoActionTypes2.default.STOP_EDITING_TODO:\n        return '';\n\n      default:\n        return state;\n    }\n  };\n\n  return TodoEditStore;\n}(_utils.ReduceStore);\n\nexports.default = new TodoEditStore();\n\n//# sourceURL=webpack:///./src/data/TodoEditStore.js?");

/***/ }),

/***/ "./src/data/TodoStore.js":
/*!*******************************!*\
  !*** ./src/data/TodoStore.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n\n\nexports.__esModule = true;\n\nvar _Counter = __webpack_require__(/*! ./Counter */ \"./src/data/Counter.js\");\n\nvar _Counter2 = _interopRequireDefault(_Counter);\n\nvar _immutable = __webpack_require__(/*! immutable */ \"./node_modules/immutable/dist/immutable.js\");\n\nvar _immutable2 = _interopRequireDefault(_immutable);\n\nvar _utils = __webpack_require__(/*! flux/utils */ \"./node_modules/flux/utils.js\");\n\nvar _Todo = __webpack_require__(/*! ./Todo */ \"./src/data/Todo.js\");\n\nvar _Todo2 = _interopRequireDefault(_Todo);\n\nvar _TodoActionTypes = __webpack_require__(/*! ./TodoActionTypes */ \"./src/data/TodoActionTypes.js\");\n\nvar _TodoActionTypes2 = _interopRequireDefault(_TodoActionTypes);\n\nvar _TodoDispatcher = __webpack_require__(/*! ./TodoDispatcher */ \"./src/data/TodoDispatcher.js\");\n\nvar _TodoDispatcher2 = _interopRequireDefault(_TodoDispatcher);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TodoStore = function (_ReduceStore) {\n  _inherits(TodoStore, _ReduceStore);\n\n  function TodoStore() {\n    _classCallCheck(this, TodoStore);\n\n    return _possibleConstructorReturn(this, _ReduceStore.call(this, _TodoDispatcher2.default));\n  }\n\n  TodoStore.prototype.getInitialState = function getInitialState() {\n    return _immutable2.default.OrderedMap();\n  };\n\n  TodoStore.prototype.reduce = function reduce(state, action) {\n    switch (action.type) {\n      case _TodoActionTypes2.default.ADD_TODO:\n        // Don't add todos with no text.\n        if (!action.text) {\n          return state;\n        }\n        var id = _Counter2.default.increment();\n        return state.set(id, new _Todo2.default({\n          id: id,\n          text: action.text,\n          complete: false\n        }));\n\n      case _TodoActionTypes2.default.DELETE_COMPLETED_TODOS:\n        return state.filter(function (todo) {\n          return !todo.complete;\n        });\n\n      case _TodoActionTypes2.default.DELETE_TODO:\n        return state.delete(action.id);\n\n      case _TodoActionTypes2.default.EDIT_TODO:\n        return state.setIn([action.id, 'text'], action.text);\n\n      case _TodoActionTypes2.default.TOGGLE_ALL_TODOS:\n        var areAllComplete = state.every(function (todo) {\n          return todo.complete;\n        });\n        return state.map(function (todo) {\n          return todo.set('complete', !areAllComplete);\n        });\n\n      case _TodoActionTypes2.default.TOGGLE_TODO:\n        return state.update(action.id, function (todo) {\n          return todo.set('complete', !todo.complete);\n        });\n\n      default:\n        return state;\n    }\n  };\n\n  return TodoStore;\n}(_utils.ReduceStore);\n\nexports.default = new TodoStore();\n\n//# sourceURL=webpack:///./src/data/TodoStore.js?");

/***/ }),

/***/ "./src/views/AppView.js":
/*!******************************!*\
  !*** ./src/views/AppView.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n\n\nexports.__esModule = true;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _classnames = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction AppView(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(Header, props),\n    _react2.default.createElement(Main, props),\n    _react2.default.createElement(Footer, props)\n  );\n}\n\nfunction Header(props) {\n  return _react2.default.createElement(\n    'header',\n    { id: 'header' },\n    _react2.default.createElement(\n      'h1',\n      null,\n      'todos'\n    ),\n    _react2.default.createElement(NewTodo, props)\n  );\n}\n\nfunction Main(props) {\n  if (!props.todos || props.todos.size === 0) {\n    return null;\n  }\n\n  // If this were expensive we could move it to the container.\n  var areAllComplete = props.todos.every(function (todo) {\n    return todo.complete;\n  });\n\n  return _react2.default.createElement(\n    'section',\n    { id: 'main' },\n    _react2.default.createElement('input', {\n      checked: areAllComplete ? 'checked' : '',\n      id: 'toggle-all',\n      type: 'checkbox',\n      onChange: props.onToggleAllTodos\n    }),\n    _react2.default.createElement(\n      'label',\n      { htmlFor: 'toggle-all' },\n      'Mark all as complete'\n    ),\n    _react2.default.createElement(\n      'ul',\n      { id: 'todo-list' },\n      [].concat(props.todos.values()).reverse().map(function (todo) {\n        return _react2.default.createElement(TodoItem, {\n          key: todo.id,\n          editing: props.editing,\n          todo: todo,\n          onDeleteTodo: props.onDeleteTodo,\n          onEditTodo: props.onEditTodo,\n          onStartEditingTodo: props.onStartEditingTodo,\n          onStopEditingTodo: props.onStopEditingTodo,\n          onToggleTodo: props.onToggleTodo\n        });\n      })\n    )\n  );\n}\n\nfunction Footer(props) {\n  if (!props.todos || props.todos.size === 0) {\n    return null;\n  }\n\n  var remaining = props.todos.filter(function (todo) {\n    return !todo.complete;\n  }).size;\n  var completed = props.todos.size - remaining;\n  var phrase = remaining === 1 ? ' item left' : ' items left';\n\n  var clearCompletedButton = null;\n  if (completed > 0) {\n    clearCompletedButton = _react2.default.createElement(\n      'button',\n      {\n        id: 'clear-completed',\n        onClick: props.onDeleteCompletedTodos },\n      'Clear completed (',\n      completed,\n      ')'\n    );\n  }\n\n  return _react2.default.createElement(\n    'footer',\n    { id: 'footer' },\n    _react2.default.createElement(\n      'span',\n      { id: 'todo-count' },\n      _react2.default.createElement(\n        'strong',\n        null,\n        remaining\n      ),\n      phrase\n    ),\n    clearCompletedButton\n  );\n}\n\nvar ENTER_KEY_CODE = 13;\nfunction NewTodo(props) {\n  var addTodo = function addTodo() {\n    return props.onAdd(props.draft);\n  };\n  var onBlur = function onBlur() {\n    return addTodo();\n  };\n  var onChange = function onChange(event) {\n    return props.onUpdateDraft(event.target.value);\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.keyCode === ENTER_KEY_CODE) {\n      addTodo();\n    }\n  };\n  return _react2.default.createElement('input', {\n    autoFocus: true,\n    id: 'new-todo',\n    placeholder: 'What needs to be done?',\n    value: props.draft,\n    onBlur: onBlur,\n    onChange: onChange,\n    onKeyDown: onKeyDown\n  });\n}\n\nfunction TodoItem(props) {\n  var editing = props.editing,\n      todo = props.todo;\n\n  var isEditing = editing === todo.id;\n  var onDeleteTodo = function onDeleteTodo() {\n    return props.onDeleteTodo(todo.id);\n  };\n  var onStartEditingTodo = function onStartEditingTodo() {\n    return props.onStartEditingTodo(todo.id);\n  };\n  var onToggleTodo = function onToggleTodo() {\n    return props.onToggleTodo(todo.id);\n  };\n\n  // Construct the input for editing a task if necessary.\n  var input = null;\n  if (isEditing) {\n    var onChange = function onChange(event) {\n      return props.onEditTodo(todo.id, event.target.value);\n    };\n    var onStopEditingTodo = props.onStopEditingTodo;\n    var onKeyDown = function onKeyDown(event) {\n      if (event.keyCode === ENTER_KEY_CODE) {\n        onStopEditingTodo();\n      }\n    };\n    input = _react2.default.createElement('input', {\n      autoFocus: true,\n      className: 'edit',\n      value: todo.text,\n      onBlur: onStopEditingTodo,\n      onChange: onChange,\n      onKeyDown: onKeyDown\n    });\n  }\n\n  return _react2.default.createElement(\n    'li',\n    {\n      className: (0, _classnames2.default)({\n        completed: todo.complete,\n        editing: isEditing\n      }) },\n    _react2.default.createElement(\n      'div',\n      { className: 'view' },\n      _react2.default.createElement('input', {\n        className: 'toggle',\n        type: 'checkbox',\n        checked: todo.complete,\n        onChange: onToggleTodo\n      }),\n      _react2.default.createElement(\n        'label',\n        { onDoubleClick: onStartEditingTodo },\n        todo.text\n      ),\n      _react2.default.createElement('button', { className: 'destroy', onClick: onDeleteTodo })\n    ),\n    input\n  );\n}\n\nexports.default = AppView;\n\n//# sourceURL=webpack:///./src/views/AppView.js?");

/***/ })

/******/ });