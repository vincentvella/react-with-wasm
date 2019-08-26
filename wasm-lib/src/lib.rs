extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen(js_name = greetPerson)]
pub fn greet_person(name: &str) {
    alert(&format!("Hello, {}!", name));
}