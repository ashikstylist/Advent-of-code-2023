const encryptedValue: string = ``; // Input

const int_words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

const enc_list : string[] = encryptedValue.split("\n");
let count: number = 0;
enc_list.map(data => {
    let r: {
     [key: string] : number
    }[] = []; // Result set

    // Structure the numbers
    data.split("").filter(res => {
        if(parseInt(res)) {
            const index_of_int = data.search(res);
            r.push({[res]: index_of_int})
        }
    })


    int_words.map((res, index) => {
        // Structure the only(int)
        let temp_int = data;
        const num_inside_words = (index + 1).toString();
        while (temp_int.includes(num_inside_words)) {
            const index_of_int = temp_int.search(num_inside_words);
            const int_obj = {
                [index + 1] : index_of_int
            }
            r.push(int_obj);
            temp_int = temp_int.replace(num_inside_words, "*")
        }

        // Structure the words(int)
        const num_list_list = data.split(res)
        if(num_list_list.length > 2) {
            let temp = data;
            while(temp.includes(res)) {
                const index_of_int = temp.search(res);
                const int_obj = {
                    [index + 1] : index_of_int
                }

                r.push(int_obj)
                temp = temp.replace(res, "*".repeat(res.length) )
            }
        }
        else if (num_list_list.length === 2) {
             const index_of_int = data.search(res);
               const int_obj = {
                    [index + 1] : index_of_int
                }
                r.push(int_obj)
        }        
    })

  let min = Object.values(r[0])
  let min_value: string = Object.keys(r[0])

  let max = Object.values(r[0])
  let max_value: string = Object.keys(r[0])
  r.map((res) => {
    if(parseInt(Object.values(res)) <= min) {
        min = Object.values(res);
        min_value = Object.keys(res);
    }

    if(parseInt(Object.values(res)) >= max) {
        max = Object.values(res);
        max_value = Object.keys(res);
    }
  })

  const merging_min_max = min_value + max_value;
  count += parseInt(merging_min_max)

})

console.log(count)

