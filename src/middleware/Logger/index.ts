import * as colors from "colors";
import * as logSymbols from "log-symbols";

colors.enable();

const logger = {
  error: value => console.error(logSymbols.error, value.red),
  success: value => console.log(logSymbols.success, value.green),
  info: value => console.info(logSymbols.info, value.blue),
  warn: value => console.warn(logSymbols.warning, value.yellow.underline)
};

export default logger;
