module.exports = function(data) {
  const USED_PORTS = [1, 2];
  const REG_POOL = 20;
  const NUM_OF_DATA = 10;
  const INIT_READING = {
    a : {
      start_num: 23.7,
      pulse_num: 0.01
    },
    b: {
      start_num: 16.1,
      pulse_num: 0.01
    }
  }
  let arrUint16a = new Uint16Array(NUM_OF_DATA+6);
  let arrUint16b = new Uint16Array(NUM_OF_DATA+6);
  let arrFloat32a = new Float32Array(2);
  let arrFloat32b = new Float32Array(2);

  arrUint16a[0] = data[2];
  arrUint16a[1] = data[3];
  arrUint16b[0] = data[4];
  arrUint16b[1] = data[5];

  for (var i=2; i <= NUM_OF_DATA-3; i++) {
    arrUint16a[i] = data[i+8];
    arrUint16b[i] = data[i+8];
  }

  arrFloat32a[0]= INIT_READING.a.start_num;
  arrFloat32a[1]= INIT_READING.a.pulse_num;
  arrFloat32b[0]= INIT_READING.b.start_num;
  arrFloat32b[1]= INIT_READING.b.pulse_num;

  const bufFloat32a = new Buffer(arrFloat32a.buffer).swap32();
  const bufFloat32b = new Buffer(arrFloat32b.buffer).swap32();
  const bufUint16a = new Buffer(arrUint16a.buffer).swap16();
  const bufUint16b = new Buffer(arrUint16b.buffer).swap16();
  
  const newbuf = Buffer.concat([bufFloat32a, bufUint16a, bufFloat32b, bufUint16b]);
  return newbuf;
  
}