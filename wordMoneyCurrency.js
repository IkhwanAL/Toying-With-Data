/**
 * Create By Simplefied Every Function 
 * Like Determine it 'Ratusan' or 'Puluhan', 'Satuan'
 * Every Number Only have 3 number
 * 
 * e.g:
 * 14859343
 * there are 8 number in there, divided into 3 array inside an array
 * and each array contain below equels hunderds
 *  e.g:
 *  [[1,4],[8,5,9],[3,4,3]]
 * with these we can easy manipulate the number and decided which
 * is hundeds, which is Dozen and Which is Unit Number
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

let startIndexPosition = 0;

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
    if(arr.length - 1 < 2){
        word = readPuluhan(arr);
        return word
    }
    
    if(arr[0] == 0){
		newArr = [arr[1], arr[2]]
        word = readPuluhan(arr);
        return word;
    }

    if(arr[0] == 1){
        word += satuan[100] + ' ';
    }else{
        word += readSatuan([], arr[0]) + 'Ratus ';
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
function readPuluhan(arr = [], value){
    if(arr.length - 1 < 1){
        let word = readSatuan(arr)
        return word;
    }
    if(arr[1] == 0){	
        let word = readSatuan(arr);
        return word;
    }
    
    let word = '';
	let i= 0;
	if(arr.length == 3){
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
            // console.log(`${satuan[i]} => ${i}`)
            if(keysNumber[i - 1] == value){
                word += `${satuan[i]} `;
            }
        }
    }
    // console.log(word);
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

    const length = arr.length;    
    if(length >= 4){
        word += convertMiliyar(arr, startIndexPosition);
        // console.log(word)
    }

    if(length >= 3){
        word += convertJuta(arr, startIndexPosition);
        console.log(word)
    }

    if(length >= 2){
        word += convertRibu(arr, startIndexPosition)
        console.log(word)
    }
    // if(arr)
    word += readRatusan(arr[startIndexPosition]);
    console.log(word)
}

// Test Case 
const money = '1400100'.split('').reverse();
const arr = [];
let temp = [];

money.forEach((val, ind) => {
    temp.push(val)
    // console.log(ind + 1);
    if((ind + 1) % 3 == 0){
        arr.push(temp);
        temp = [];
    }
})

// Push Sisa Temp
if(temp.length != 0){
    arr.push(temp);
    temp = [];
}

const arrRev = arr.reverse()
let newArrRev = [];
arrRev.forEach(val => {
    newArrRev.push(val.reverse())
})

wordMoneyCurrency(newArrRev, money);

// console.log(arr);

