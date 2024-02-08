const encryptedValue: string = ``; // Input

const enc_list : string[] = encryptedValue.split("\n");
let count: number = 0;

enc_list.map(data => {
  let num: string = "";
  data.split("").filter(res => {
    parseInt(res) && (num += res)
  })

  const decypt_num: string[] = num.split("")[0] + num.split("")[num.length - 1]
  count += parseInt(decypt_num)
})

console.log(count)
