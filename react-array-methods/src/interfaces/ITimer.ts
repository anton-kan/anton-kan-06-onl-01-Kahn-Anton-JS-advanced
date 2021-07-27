interface ITimer {
  intervalRef: null | NodeJS.Timeout;
  value: number;
}

export default ITimer;
