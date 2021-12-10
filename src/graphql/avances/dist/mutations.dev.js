"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CREAR_OBSERVACION = exports.ELIMINAR_AVANCE = exports.CREAR_AVANCE = exports.EDITAR_AVANCE = void 0;

var _client = require("@apollo/client");

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nmutation CrearObservacion(\n  $_id: String!\n  $observacion: String\n  ){\n  crearObservacion(\n    _id: $_id\n    observacion: $observacion\n    ){\n    _id\n    titulo\n    observaciones\n  }\n}\n\n\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nmutation EliminarAvance(\n  $_id: String!\n){\n  eliminarAvance(\n    _id: $_id\n  ){\n    _id\n    titulo\n  }\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation CrearAvance(\n    $fecha: Date!\n    $descripcion: String! \n    $proyecto: String! \n    $creadoPor: String! \n    $titulo: String!\n  ){\n    crearAvance(\n      fecha: $fecha\n      descripcion: $descripcion\n      proyecto: $proyecto\n      creadoPor: $creadoPor\n      titulo: $titulo\n    ){\n      mensaje\n      estado\n    }\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation EditarAvance(\n    $_id: String!\n    $titulo: String!\n    $descripcion: String!\n  ) {\n    editarAvance(\n      _id:$_id\n      titulo: $titulo\n      descripcion: $descripcion\n    ){\n      _id\n      titulo\n      descripcion\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var EDITAR_AVANCE = (0, _client.gql)(_templateObject());
exports.EDITAR_AVANCE = EDITAR_AVANCE;
var CREAR_AVANCE = (0, _client.gql)(_templateObject2());
exports.CREAR_AVANCE = CREAR_AVANCE;
var ELIMINAR_AVANCE = (0, _client.gql)(_templateObject3());
exports.ELIMINAR_AVANCE = ELIMINAR_AVANCE;
var CREAR_OBSERVACION = (0, _client.gql)(_templateObject4());
exports.CREAR_OBSERVACION = CREAR_OBSERVACION;