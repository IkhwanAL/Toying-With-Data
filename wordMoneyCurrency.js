/**
 * Create By Simplefied Every Function 
 * Like Determine it 'Ratusan' or 'Puluhan', 'Satuan'
 * Every Array Only have 3 number ('Ratusan', 'Puluhan', And 'Satuan')
 * 
 * e.g:
 * 14859343
 * there are 8 number in there, divided into 3 array inside an array
 * and each array contain below or equels hunderds
 * e.g:
 * [[1,4],[8,5,9],[3,4,3]] => MultiDimensional Array
 * with these we can easy manipulate the number and decided which
 * is hundreds, which is Dozen and Which is Unit Number
 * After That
 * we can determine which is billion, Million, and Thousand
 * by looking at outside inner Array
 */
const satuan = {
    '1': 'Satu',
    '2': 'Dua',
    '3': 'Tiga',
    '4': 'Empat',
    '5': 'Lima',
    '6': 'Enam',
    '7': 'Tujuh',
    '8': 'Delapan',
    '9': 'Sembilan',
    '10': 'Sepuluh',
    '11': 'Sebelas',
    '100': 'Seratus',
    '1000': 'Seribu'
};

let startIndexPosition = 0; // Index for outside array

const keysNumber = Object.keys(satuan); 

function readRatusan(arr){
    if(typeof arr === 'undefined' || typeof arr !== 'object'){
        return
    }
    const checkFullZeroValue = arr.every((val) => val == 0);
    if(checkFullZeroValue){
        return ''
    }

    let word = '';
    if(arr.length <= 2){
        word = readPuluhan(arr);
        return word
    }
    
    // if(arr.length == 2){
	// 	newArr = [arr[1], arr[2]]
    //     word = readPuluhan(newArr);
    //     return word;
    // }

    if(arr[0] == 1 && arr[1] == 0 && arr[2] == 0){
        word += satuan[100] + ' ';
    }
	if(arr[0] != 0){
        word += readSatuan([], arr[0]) + 'Ratus ';
    }
	if(arr[1] == 0 && arr[2] == 0){
		return word
	}
    
    word += readPuluhan([arr[1], arr[2]]);
    // word += readSatuan([], arr[2]);
    return word;
}
/**
 * 
 * Puluhan, Must Cross Check 
 * it can be Complicated When reach 
 * eleven to nineteen number And Check For Dozens Number
 */
function readPuluhan(arr = []){
    if(arr.length <= 1){
        let word = readSatuan(arr)
        return word;
    }
    // if(arr[1] == 0){	
    //     let word = readSatuan(arr);
    //     return word;
    // }
    
    let word = '';
	if(arr.length == 3){
		let i = 1;
		while(i < 2){
			if(arr[i] == 0){
				i++;
			}else
			if(arr[i] == 1 && arr[i + 1] == 0){
				word += satuan[10] + ' ';
				i++;
			}else
			if(arr[i] == 1 && arr[i + 1] == 1){
				word += satuan[11] + ' ';
				i++;
			}else
			if(arr[i] == 1){
				word += readSatuan([], arr[i+1]) + 'Belas ';
				i++;
			}else if(arr[i] != 0 && arr[i+1] == 0){
				word += readSatuan([], arr[i]) + 'Puluh ';
				i++;
			}else{
				word += readSatuan([], arr[i]) + 'Puluh '
				word += readSatuan([], arr[i + 1]);
				i++;
			}
			
		}  
	}
	if(arr.length == 2){
		console.log('im');
		let i = 0;
		while (i < 1){
			if(arr[i] == 1 && arr[i + 1] == 0){
				word += satuan[10] + ' ';
				i++;
			}else
			if(arr[i] == 1 && arr[i + 1] == 1){
				word += satuan[11] + ' ';
				i++;
			}else
			if(arr[i] == 1){
				word += readSatuan([], arr[i+1]) + 'Belas ';
				i++;
			}else if(arr[i] != 0 && arr[i+1] == 0){
				word += readSatuan([], arr[i]) + 'Puluh ';
				i++;
			}else{
				word += readSatuan([], arr[i]) + 'Puluh '
				word += readSatuan([], arr[i + 1]);
				i++;
			}
		}
	}
	
    return word;
}

function readSatuan(arr = [], value = 0){

    let word = '';

    if(arr.length != 0){
        let j = 0;
        while(j < arr.length){
            /**
             * Pastikan Cek Nilai Sebelumnya Untuk Ratusan
             */
            if(arr[j] == 0){ 
                j++;
            }
            for(let i in satuan){
                // console.log(`${satuan[i]} => ${i}`)
                if(keysNumber[i - 1] == arr[j]){
                    word += `${satuan[i]} `;
                }
            }
            j++;
        }
    }
    if(value != 0){
        for(let i in satuan){
            if(keysNumber[i - 1] == value){
                word += `${satuan[i]} `;
            }
        }
    }
    // console.log(word);
    return word;
    
}

function convertTrilyun(arr, position) {
	if(typeof position !== 'number'){
		position = +position;
	}

	let word = readRatusan(arr[position]) + 'Trilyun ';
	startIndexPosition++;
	return word;
}
function convertMiliyar(arr, position){
    if(typeof position !== 'number'){
        return
    }
    let word = readRatusan(arr[position]) + 'Miliyar ';
    startIndexPosition++;
    return word; 
}
function convertJuta(arr, position){
    if(typeof position !== 'number'){
        return
    }
    let word = readRatusan(arr[position]) + 'Juta ';
    startIndexPosition += 1;
    return word;
}
function convertRibu(arr, position){
    if(typeof position !== 'number'){
        return
    }
    let word = readRatusan(arr[position]) + 'Ribu ';
    startIndexPosition += 1;
    return word;
}
function wordMoneyCurrency(arr, money){
    if(typeof arr === 'undefined' || typeof arr !== 'object'){
        return
    }
    if(arr.length == 0){
        return 
    }
    let word = '';
	/**
	 * Jika Array Ada 4 Maka Miliyar
	 * Jika Array Ada 3 Maka Juta
	 * Jika Array Ada 2 Maka Ribu
	 * Jika Ingin Penambahan Bilangan Seperti Triliyun
	 * Cukup Menambah Perkondision IF 
	 * Dengan Length >= 5 dan satu function yang sama
	 * Dengan function lain (convertJuta, convertMiliyar dan lain)
	 */
    const length = arr.length;
	console.log(arr);
	if(length >= 5){
		word += convertTrilyun(arr, startIndexPosition);
	}
    if(length >= 4){
        word += convertMiliyar(arr, startIndexPosition);
        // console.log(word)
    }

    if(length >= 3){
        word += convertJuta(arr, startIndexPosition);
        // console.log(word)
    }

    if(length >= 2){
        word += convertRibu(arr, startIndexPosition)
        // console.log(word)
    }
    // if(arr)
    word += readRatusan(arr[startIndexPosition]);
	return word;
}
/**
 * Mengubah String (Uang) Menjadi
 * Array Multidimesional
 * 
 * @param {string} money
 * @return {string} Word
 */
function convertMoney(/*string*/ money){
	if(typeof money !== 'string'){
		return;
	}
	
	const currency = money.split('').reverse();
	let arr = [];
	let temp = [];
	startIndexPosition = 0;

	currency.forEach((val, ind) => {
		temp.push(val)
		if((ind + 1) % 3 == 0){
			arr.push(temp);
			temp = [];
		}
	});

	if(temp.length != 0){
		arr.push(temp);
		temp = [];
	}

	const arrRev = arr.reverse()
	let newArrRev = [];
	arrRev.forEach(val => {
		newArrRev.push(reverseArrayInPlace(val));
	})
	return wordMoneyCurrency(newArrRev, currency);
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
