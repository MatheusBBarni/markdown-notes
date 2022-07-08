#![cfg_attr(
  all(not(debug_assertions), target_os = "macos"),
  windows_subsystem = "macos"
)]

use serde::{Deserialize, Serialize};

use crate::prisma::*;
pub mod prisma;

#[derive(Serialize, Deserialize)]
struct Person {
  name: String,
  email: String,
  age: usize
}

#[tauri::command]
fn log_person(person: Person) {
  // println!("name: {}, email: {}, age: {}", person.name, person.email, person.age);
  println!("name: {}, email: {}, age: {}", person.name, person.email, person.age);
}

#[tokio::main]
pub async fn main() {
  let client = new_client().await.unwrap();
  
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![log_person])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
