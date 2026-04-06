function myLog(severity, logText) {
  if (!logText) {
    console.log(`[${severity}]`);
    return;
  }

  switch (severity) {
    case "NORMAL":
      console.log(`[NORMAL] ${logText}`);
      break;
    case "WARNING":
      console.warn(`[WARNING] ${logText}`);
      break;
    case "ERROR":
      console.error(`[ERROR] ${logText}`);
      break;
    default:
      console.log(`[UNKNOWN] ${logText}`);
  }
}
myLog("NORMAL", "System is running smoothly.");
myLog("WARNING", "Disk space is getting low.");
myLog("ERROR", "System crash!");
myLog("INFO", "This is an extra log."); // Will hit default
myLog("NORMAL"); // Will just log the severity

myLog("NORMAL", "System is running smoothly.");
myLog("NORMAL", "OK"); // Will just log the severity