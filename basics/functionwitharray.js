//WAF - write a function 
// name: getEmpDevices(empName)
// empName: string
// return: Array -> collection of all the devices for an employee

/**
 * 
 * @param {string} empName 
 */
function getEmpDevices(empName){

    console.log('empName: '+empName);
    
    let devices = [];

    switch (empName.trim().toLowerCase()) {
        case 'pradeep':
            devices.push('mac book pro');
            devices.push('ipad');
        break;
        case 'aishu':
            devices.push('HP windows Laptop');
            devices.push('samsung');
        break;
        case 'anu':
            devices.push('mouse');
        break;
        default:
            console.log('invalid employee');
        break;
    }
    return devices;

}

let empDevices = getEmpDevices('aishu');

console.log(empDevices);