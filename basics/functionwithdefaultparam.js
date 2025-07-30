function print(name='naven'){
    console.log('hi'+name);
}

print();
print('pooja');

function multiply(a=0, b=0){
    console.log(a*b);
}

multiply();
multiply(2,3);
multiply(2);

/**
 * 
 * @param {string} browserName 
 */
function openbrowser(browserName='chrome'){
    switch (browserName) {
        case 'firefox':
            console.log('Open firefox');
            break;
        case 'chrome':
            console.log('Open firefox');
            break;    
        default:
            console.log('invalid browser, hence running tests on chrome browser');
            break;
    }
}

openbrowser('senthil');

console.log('-----');


runTest('senthil')
function runTest(envName = 'qa'){
    switch (envName) {
        case 'qa':
            console.log('run tests on QA evnronment');
        break;
        case 'stage':
            console.log('run tests on stage evnronment');
        break;
        case 'dev':
            console.log('run tests on dev evnronment');
        break;
        case 'prod':
            console.log('run tests on prod evnronment');
        break;
        
        default:
            console.log('====invlaid env === '+envName);
            console.log('hence running tests on defult : QA Env ');
            break;
    }
}

