const { iphones } = require('./models');
const { macbooks } = require('./models');
const { airpods } = require('./models');

// Implement CRUD

/************************************************************/
// [C]reate
// iPhones 1
iphones.create({
    model: 'iPhone 13',
    color: 'Pink',
    size: '6.1"',
    life: 19,
})
    .then(function (createdIphone) {
        console.log('1st iPhone', createdIphone);
    })
    .catch(function (err) {
        console.log('ERROR with adding new iPhone', error);
    });
// iPhones 2
iphones.create({
    model: 'iPhone 13',
    color: 'Blue',
    size: '6.1"',
    life: 19,
})
    .then(function (createdIphone) {
        console.log('2nd iPhone', createdIphone);
    })
    .catch(function (err) {
        console.log('ERROR with adding new iPhone', error);
    });
// iPhones 3
iphones.create({
    model: 'iPhone 13',
    color: 'Midnight',
    size: '6.1"',
    life: 19,
})
    .then(function (createdIphone) {
        console.log('3rd iPhone', createdIphone);
    })
    .catch(function (err) {
        console.log('ERROR with adding new iPhone', error);
    });
// iPhones 4
iphones.create({
    model: 'iPhone 13',
    color: 'Starlight',
    size: '6.1"',
    life: 19,
})
    .then(function (createdIphone) {
        console.log('4th iPhone', createdIphone);
    })
    .catch(function (err) {
        console.log('ERROR with adding new iPhone', error);
    });
// iPhones 5
iphones.create({
    model: 'iPhone 13',
    color: 'Red',
    size: '6.1"',
    life: 19,
})
    .then(function (createdIphone) {
        console.log('5th iPhone', createdIphone);
    })
    .catch(function (err) {
        console.log('ERROR with adding new iPhone', error);
    });
// iPhones 6
iphones.create({
    model: 'iPhone 13',
    color: 'Pink',
    size: '5.4"',
    life: 19,
})
    .then(function (createdIphone) {
        console.log('6th iPhone', createdIphone);
    })
    .catch(function (err) {
        console.log('ERROR with adding new iPhone', error);
    });
// iPhones 7
iphones.create({
    model: 'iPhone 13',
    color: 'Blue',
    size: '5.4"',
    life: 19,
})
    .then(function (createdIphone) {
        console.log('7th iPhone', createdIphone);
    })
    .catch(function (err) {
        console.log('ERROR with adding new iPhone', error);
    });
// iPhones 8
iphones.create({
    model: 'iPhone 13',
    color: 'Midnight',
    size: '5.4"',
    life: 19,
})
    .then(function (createdIphone) {
        console.log('8th iPhone', createdIphone);
    })
    .catch(function (err) {
        console.log('ERROR with adding new iPhone', error);
    });
// iPhones 9
iphones.create({
    model: 'iPhone 13',
    color: 'Starlight',
    size: '5.4"',
    life: 19,
})
    .then(function (createdIphone) {
        console.log('9th iPhone', createdIphone);
    })
    .catch(function (err) {
        console.log('ERROR with adding new iPhone', error);
    });
// iPhones 10
iphones.create({
    model: 'iPhone 13',
    color: 'Red',
    size: '5.4"',
    life: 19,
})
    .then(function (createdIphone) {
        console.log('10th iPhone', createdIphone);
    })
    .catch(function (err) {
        console.log('ERROR with adding new iPhone', error);
    });
/************************************************************/
// MacBooks 1
macbooks.create({
    model: 'M1 PRO (2021)',
    size: 14,
    speed: 'Scary Fast',
    life: 17,
})
    .then(function (createdMacBook) {
        console.log('1st Macbook', createdMacBook);
    })
    .catch(function (err) {
        console.log('ERROR with adding new MacBook', error);
    });
// MacBooks 2
macbooks.create({
    model: 'M1 PRO (2021)',
    size: 16,
    speed: 'Scary Fast',
    life: 21,
})
    .then(function (createdMacBook) {
        console.log('2nd Macbook', createdMacBook);
    })
    .catch(function (err) {
        console.log('ERROR with adding new MacBook', error);
    });
// MacBooks 3
macbooks.create({
    model: 'M1 MAX (2021)',
    size: 14,
    speed: 'Scary Faster',
    life: 17,
})
    .then(function (createdMacBook) {
        console.log('3rd Macbook', createdMacBook);
    })
    .catch(function (err) {
        console.log('ERROR with adding new MacBook', error);
    });
// MacBooks 4
macbooks.create({
    model: 'M1 MAX (2021)',
    size: 16,
    speed: 'Scary Faster',
    life: 21,
})
    .then(function (createdMacBook) {
        console.log('4th Macbook', createdMacBook);
    })
    .catch(function (err) {
        console.log('ERROR with adding new MacBook', error);
    });
// MacBooks 5
macbooks.create({
    model: 'M1 PRO (2020)',
    size: 13,
    speed: 'Fast',
    life: 20,
})
    .then(function (createdMacBook) {
        console.log('5th Macbook', createdMacBook);
    })
    .catch(function (err) {
        console.log('ERROR with adding new MacBook', error);
    });
// MacBooks 6
macbooks.create({
    model: 'MacBook Pro (2020)',
    size: 13,
    speed: 'Fast',
    life: 10,
})
    .then(function (createdMacBook) {
        console.log('6th Macbook', createdMacBook);
    })
    .catch(function (err) {
        console.log('ERROR with adding new MacBook', error);
    });
// MacBooks 7
macbooks.create({
    model: 'MacBook Pro (2019)',
    size: 16,
    speed: 'Fast',
    life: 11,
})
    .then(function (createdMacBook) {
        console.log('7th Macbook', createdMacBook);
    })
    .catch(function (err) {
        console.log('ERROR with adding new MacBook', error);
    });
// MacBooks 8
macbooks.create({
    model: 'MacBook Pro (2019)',
    size: 13,
    speed: 'Fast',
    life: 10,
})
    .then(function (createdMacBook) {
        console.log('8th Macbook', createdMacBook);
    })
    .catch(function (err) {
        console.log('ERROR with adding new MacBook', error);
    });
// MacBooks 9
macbooks.create({
    model: 'MacBook Pro (2019)',
    size: 15,
    speed: 'Fast',
    life: 10,
})
    .then(function (createdMacBook) {
        console.log('9th Macbook', createdMacBook);
    })
    .catch(function (err) {
        console.log('ERROR with adding new MacBook', error);
    });
// MacBooks 10
macbooks.create({
    model: 'MacBook Pro (2018)',
    size: 15,
    speed: 'Fast',
    life: 10,
})
    .then(function (createdMacBook) {
        console.log('10th Macbook', createdMacBook);
    })
    .catch(function (err) {
        console.log('ERROR with adding new MacBook', error);
    });
/************************************************************/
// AirPods 1
airpods.create({
    model: 'AirPods (2nd Generation) (No Case)',
    resistant: false,
    charge: 'Lightning Charging',
    life: 5,
})
    .then(function (createdAirPod) {
        console.log('1st AirPod', createdAirPod);
    })
    .catch(function (err) {
        console.log('ERROR with adding new AirPod', error);
    });
// AirPods 2
airpods.create({
    model: 'AirPods (2nd Generation) (In Case)',
    resistant: false,
    charge: 'Lightning Charging',
    life: 24,
})
    .then(function (createdAirPod) {
        console.log('2nd AirPod', createdAirPod);
    })
    .catch(function (err) {
        console.log('ERROR with adding new AirPod', error);
    });
// AirPods 3
airpods.create({
    model: 'AirPods (3rd Generation) (No Case)',
    resistant: true,
    charge: 'MagSafe, Wireless, and Lightning Charging',
    life: 6,
})
    .then(function (createdAirPod) {
        console.log('3rd AirPod', createdAirPod);
    })
    .catch(function (err) {
        console.log('ERROR with adding new AirPod', error);
    });
// AirPods 4
airpods.create({
    model: 'AirPods (3rd Generation) (In Case)',
    resistant: true,
    charge: 'MagSafe, Wireless, and Lightning Charging',
    life: 30,
})
    .then(function (createdAirPod) {
        console.log('4th AirPod', createdAirPod);
    })
    .catch(function (err) {
        console.log('ERROR with adding new AirPod', error);
    });
// AirPods 5
airpods.create({
    model: 'AirPods Pro (No Case)',
    resistant: true,
    charge: 'MagSafe, Wireless, and Lightning Charging',
    life: 4.5,
})
    .then(function (createdAirPod) {
        console.log('5th AirPod', createdAirPod);
    })
    .catch(function (err) {
        console.log('ERROR with adding new AirPod', error);
    });
// AirPods 6
airpods.create({
    model: 'AirPods Pro (In Case)',
    resistant: true,
    charge: 'MagSafe, Wireless, and Lightning Charging',
    life: 24,
})
    .then(function (createdAirPod) {
        console.log('6th AirPod', createdAirPod);
    })
    .catch(function (err) {
        console.log('ERROR with adding new AirPod', error);
    });
// AirPods 7
airpods.create({
    model: 'AirPods Max (White)',
    resistant: false,
    charge: 'Lightning Charging',
    life: 20,
})
    .then(function (createdAirPod) {
        console.log('7th AirPod', createdAirPod);
    })
    .catch(function (err) {
        console.log('ERROR with adding new AirPod', error);
    });
// AirPods 8
airpods.create({
    model: 'AirPods Max (Black)',
    resistant: false,
    charge: 'Lightning Charging',
    life: 20,
})
    .then(function (createdAirPod) {
        console.log('8th AirPod', createdAirPod);
    })
    .catch(function (err) {
        console.log('ERROR with adding new AirPod', error);
    });
// AirPods 9
airpods.create({
    model: 'AirPods Max (Blue)',
    resistant: false,
    charge: 'Lightning Charging',
    life: 20,
})
    .then(function (createdAirPod) {
        console.log('9th AirPod', createdAirPod);
    })
    .catch(function (err) {
        console.log('ERROR with adding new AirPod', error);
    });
// AirPods 10
airpods.create({
    model: 'AirPods Max (Red)',
    resistant: false,
    charge: 'Lightning Charging',
    life: 20,
})
    .then(function (createdAirPod) {
        console.log('10th AirPod', createdAirPod);
    })
    .catch(function (err) {
        console.log('ERROR with adding new AirPod', error);
    });
/************************************************************/
// [R]ead
// findAll iPhones
iphones.findAll()
    .then(function (iphonesArray) {
        console.log('ALL IPHONES HERE')
        for (let i = 0; i < iphonesArray; i++) {
            console.log(iphonesArray[i])
        }
    })
iphones.findAll()
    .then(function (iphonesArray) {
        console.log('ALL RED IPHONES HERE')
        for (let i = 0; i < iphonesArray; i++) {
            if (iphonesArray[i].color == 'Red') {
                console.log(iphonesArray[i])
            }
        }
    })
// findAll MacBooks
macbooks.findAll()
    .then(function (macbooksArray) {
        console.log('ALL MACBOOKS HERE')
        for (let i = 0; i < macbooksArray; i++) {
            console.log(macbooksArray[i])
        }
    })
macbooks.findAll()
    .then(function (macbooksArray) {
        console.log('ALL 13 INCH MACBOOKS HERE')
        for (let i = 0; i < macbooksArray; i++) {
            if (macbooksArray[i].size == 13) {
                console.log(macbooksArray[i])
            }
        }
    })
// findAll AirPods
airpods.findAll()
    .then(function (airpodsArray) {
        console.log('ALL AIRPODS HERE')
        for (let i = 0; i < airpodsArray; i++) {
            console.log(airpodsArray[i])
        }
    })
airpods.findAll()
    .then(function (airpodsArray) {
        console.log('ALL NON-RESISTANT AIRPODS HERE')
        for (let i = 0; i < airpodsArray; i++) {
            if (airpodsArray[i].resistant == false) {
                console.log(airpodsArray[i])
            }
        }
    })
// findOne iPhone
iphones.findOne({
    where: { color: 'Blue' }
}).then(function (foundIphone) {
    console.log('FOUND BLUE IPHONE', foundIphone)
});
iphones.findOne({
    where: { color: 'Starlight' }
}).then(function (foundIphone) {
    console.log('FOUND STARLIGHT IPHONE', foundIphone)
});
iphones.findOne({
    where: { color: 'Midnight' }
}).then(function (foundIphone) {
    console.log('FOUND MIDNIGHT IPHONE', foundIphone)
});
// findOne MacBooks
macbooks.findOne({
    where: { speed: 'Scary Fast' }
}).then(function (foundMacbook) {
    console.log('FOUND SCARY FAST MACBOOK', foundMacbook)
});
macbooks.findOne({
    where: { speed: 'Scary Faster' }
}).then(function (foundMacbook) {
    console.log('FOUND SCARY FASTER MACBOOK', foundMacbook)
});
macbooks.findOne({
    where: { life: 17 }
}).then(function (foundMacbook) {
    console.log('FOUND 17 HOUR LIFE MACBOOK', foundMacbook)
});
// findOne AirPods
airpods.findOne({
    where: { life: 6 }
}).then(function (foundAirpods) {
    console.log('FOUND 6 HOUR LIFE AIRPOD', foundAirpods)
});
airpods.findOne({
    where: { resistant: true }
}).then(function (foundAirpods) {
    console.log('FOUND RESISTANT AIRPOD', foundAirpods)
});
airpods.findOne({
    where: { name: 'AirPods Max (Red)' }
}).then(function (foundAirpods) {
    console.log('FOUND RED AIRPODS MAX', foundAirpods)
});
// findByPk iPhone
iphones.findByPk(1)
    .then(function (iphonePk) {
        console.log('FOUND IPHONE PK ', iphonePk);
    })
// findByPk MacBook
macbooks.findByPk(17)
    .then(function (macbookPk) {
        console.log('FOUND MACBOOK PK ', macbookPk);
    })
// findByPk AirPods
airpods.findByPk(24)
    .then(function (airpodsPk) {
        console.log('FOUND AIRPODS PK ', airpodsPk);
    })
/************************************************************/
// [U]pdate
// update iPhones
iphones.update({
    color: 'Dark Grey'
}, {
    where: {
        color: 'Midnight'
    }
}).then(function (numRowsChanged) {
    console.log('UPDATED IPHONE COLOR', numRowsChanged)
});
iphones.update({
    color: 'White'
}, {
    where: {
        color: 'Starlight'
    }
}).then(function (numRowsChanged) {
    console.log('UPDATED IPHONE COLOR AGAIN', numRowsChanged)
});
// update MacBooks
macbooks.update({
    speed: 'Reasonably Quick'
}, {
    where: {
        speed: 'Scary Fast'
    }
}).then(function (numRowsChanged) {
    console.log('UPDATED MACBOOK SPEED', numRowsChanged)
});
macbooks.update({
    speed: 'Reasonably Quicker'
}, {
    where: {
        speed: 'Scary Faster'
    }
}).then(function (numRowsChanged) {
    console.log('UPDATED MACBOOK SPEED AGAIN', numRowsChanged)
});
// update AirPods
airpods.update({
    model: 'AirPods Max (Starlight)'
}, {
    where: {
        model: 'AirPods Max (White)'
    }
}).then(function (numRowsChanged) {
    console.log('UPDATED AIRPODS MODEL', numRowsChanged)
});
airpods.update({
    model: 'AirPods Max (Midnight)'
}, {
    where: {
        model: 'AirPods Max (Black)'
    }
}).then(function (numRowsChanged) {
    console.log('UPDATED AIRPODS MODEL AGAIN', numRowsChanged)
});
/************************************************************/
// [D]elete
