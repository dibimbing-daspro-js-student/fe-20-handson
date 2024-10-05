const favorites = ['soup', 'nasi goreng', 'nugget', 'soto', 'mi goreng']
console.log(...favorites)
console.log(favorites[0], favorites[1], favorites[2], favorites[3], favorites[4])

console.log(favorites)

console.log("============================================================")

const akteKelahiranBudi = {
    nama: 'Budi',
    tempatLahir: 'Surabaya',
    tanggalLahir: '26 Januari 1992'
}

const keluargaBudi = {
    ayah: 'Budi Doremi',
    ibu: 'Ibu Budi',
    adik: 'Adik Budi'
}

const informasiBudi = {
    ...akteKelahiranBudi,
    ...keluargaBudi,
}

const informasiBudi2 = {
    nama: akteKelahiranBudi.nama,
    tempatLahir: akteKelahiranBudi.tempatLahir,
    tanggalLahir: akteKelahiranBudi.tanggalLahir,
    ayah: keluargaBudi.ayah,
    ibu: keluargaBudi.ibu,
    adik: keluargaBudi.adik
}

console.log(informasiBudi)
console.log(informasiBudi2)

console.log("============================================================")

const keluargaBudiArray = ['Budi', 'Sumini', 'Doremi']
const keluargaAndi = ['Andi', 'Tia', 'Dodi']

const keluargaAndiBudi = [...keluargaBudiArray, ... keluargaAndi]
console.log(keluargaAndiBudi)

const duplicateKeluargaAndi = [...keluargaAndi]
duplicateKeluargaAndi[2] = 'Erik'

console.log('duplicate keluarga andi: ' + duplicateKeluargaAndi)
console.log('keluarga andi: ' + keluargaAndi)

console.log("============================================================")

const keluargaBudiCampur = {
    ...keluargaBudi,
    ...keluargaBudiArray,
}

console.log(keluargaBudiCampur)