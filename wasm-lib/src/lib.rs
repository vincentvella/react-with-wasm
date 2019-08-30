extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen(js_name = fibonacci)]
pub extern "C" fn fibonacci(n: u64) -> u64 {
    if n <= 2 { return 1 }
    return fibonacci(n-1) + fibonacci(n-2);
}