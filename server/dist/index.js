"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cars_1 = __importDefault(require("./data/cars"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/api/cars", (_req, res) => {
    res.json({ cars: cars_1.default });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`app is running on PORT ${PORT}`);
});
