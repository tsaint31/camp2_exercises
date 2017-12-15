function retrieve(callback,data) {
  const result=[{"id":"9f8d8840-e22c-496f-b865-f5014710e234","decathlon_id":309814,"label":"Chaussettes"},
    {"id":"98bbd88d-6e8c-4be6-8a2c-ef8e6ceca3af","decathlon_id":735058,"label":"Vêtements femme"},
    {"id":"ee62f748-5efc-4c9f-97e8-4bd635296ba3","decathlon_id":771006,"label":"Amorçage carpe"},
    {"id":"f24f0615-84c1-484a-a9da-689479694119","decathlon_id":600692,"label":"Transport"}];
  callback(result,data);
}

module.exports = retrieve;
