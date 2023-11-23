import express from "express";

const router = express.Router();

router.post("/", (require, respota) => {
  return respota.send("Hello World");
});

export { router };
