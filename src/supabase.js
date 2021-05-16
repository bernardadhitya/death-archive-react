import { createClient } from '@supabase/supabase-js';
import { supabaseConfig } from './env';


const { url, apiKey } = supabaseConfig;
const supabase = createClient(url, apiKey);

const postDiagnosaIbuBayi = async (diagnosaIbuAnakData) => {
  const emptyData = { data: [{ diagnosa_id: null}] };

  const { data: penyebabUtamaBayi } = diagnosaIbuAnakData[0] !== null ?
    await supabase.from('diagnosa').insert(diagnosaIbuAnakData[0]) : emptyData;
  const { data: penyebabLainnyaBayi } = diagnosaIbuAnakData[1] !== null ?
    await supabase.from('diagnosa').insert(diagnosaIbuAnakData[1]) : emptyData;
  const { data: penyebabUtamaIbu } = diagnosaIbuAnakData[2] !== null ?
    await supabase.from('diagnosa').insert(diagnosaIbuAnakData[2]) : emptyData;
  const { data: penyebabLainnyaIbu } = diagnosaIbuAnakData[3] !== null ?
    await supabase.from('diagnosa').insert(diagnosaIbuAnakData[3]) : emptyData;

  const diagnosaIbuBayi = [
    penyebabUtamaBayi[0],
    penyebabLainnyaBayi[0],
    penyebabUtamaIbu[0],
    penyebabLainnyaIbu[0]
  ];

  const diagnosaIbuBayiIds = diagnosaIbuBayi.map(diagnosa => diagnosa.diagnosa_id);

  const { data } = await supabase
  .from('diagnosa_ibu_bayi')
  .insert([
    {
      penyebab_utama_bayi_id: diagnosaIbuBayiIds[0],
      penyebab_lain_bayi_id: diagnosaIbuBayiIds[1],
      penyebab_utama_ibu_id: diagnosaIbuBayiIds[2],
      penyebab_lain_ibu_id: diagnosaIbuBayiIds[3]
    }
  ])

  return data[0].diagnosa_ibu_bayi_id
}

const postDiagnosaSkmk = async (diagnosaUmumData, diagnosaIbuAnakData, lamaKematian) => {
  const diagnosaIbyBayiId = lamaKematian === '0' ?
    await postDiagnosaIbuBayi(diagnosaIbuAnakData) : null;

  const emptyData = { data: [{ diagnosa_id: null}] };

  const { data: penyebabLangsung } = diagnosaUmumData[0] !== null ?
    await supabase.from('diagnosa').insert(diagnosaUmumData[0]) : emptyData;
  const { data: penyebabAntara1 } = diagnosaUmumData[1] !== null ?
    await supabase.from('diagnosa').insert(diagnosaUmumData[1]) : emptyData;
  const { data: penyebabAntara2 } = diagnosaUmumData[2] !== null ?
    await supabase.from('diagnosa').insert(diagnosaUmumData[2]) : emptyData;
  const { data: penyebabDasar } = diagnosaUmumData[3] !== null ?
    await supabase.from('diagnosa').insert(diagnosaUmumData[3]) : emptyData;

  const diagnosaUmum = [
    penyebabLangsung[0],
    penyebabAntara1[0],
    penyebabAntara2[0],
    penyebabDasar[0]
  ];

  const diagnosaUmumIds = diagnosaUmum.map(diagnosa => diagnosa.diagnosa_id);

  const { data } = await supabase
  .from('diagnosa_skmk')
  .insert([
    {
      penyebab_langsung_id: diagnosaUmumIds[0],
      penyebab_antara_1_id: diagnosaUmumIds[1],
      penyebab_antara_2_id: diagnosaUmumIds[2],
      penyebab_dasar_id: diagnosaUmumIds[3],
      diagnosa_ibu_bayi_id: diagnosaIbyBayiId
    }
  ])

  return data[0].diagnosa_skmk_id
}

const postPelaporSkmk = async (pelaporData) => {
  let { data: matchingPelapor } = await supabase
  .from('pelapor_skmk')
  .select('nama_pelapor')
  .filter('ktp', 'eq', pelaporData.ktp)

  if (matchingPelapor.length > 0) return null;

  const { data, error } = await supabase
  .from('pelapor_skmk')
  .insert([
    pelaporData,
  ])

  return data[0].pelapor_skmk_id;
}

const postJenazahSkmk = async (jenazahData) => {
  let { data: matchingJenazah } = await supabase
  .from('jenazah_skmk')
  .select('nama_jenazah')
  .filter('ktp', 'eq', jenazahData.ktp)

  if (matchingJenazah.length > 0) return null;

  const { data } = await supabase
  .from('jenazah_skmk')
  .insert([
    jenazahData,
  ])

  return data[0].jenazah_id;
}

export const postSuratSkmk = async (
  suratSkmkData,
  diagnosa_skmk_id,
  pelapor_skmk_id,
  jenazah_id
) => {
  const { data } = await supabase
  .from('surat_skmk')
  .insert([
    {
      ...suratSkmkData,
      diagnosa_skmk_id,
      pelapor_skmk_id,
      jenazah_id
    },
  ]);

  return data;
}

export const createSkmkEntry = async (
  suratSkmkData,
  pelaporData,
  jenazahData,
  diagnosaUmumData,
  diagnosaIbuAnakData,
  lamaKematian
) => {
  
  const diagnosaEntry = await postDiagnosaSkmk(diagnosaUmumData, diagnosaIbuAnakData, lamaKematian);
  const pelaporEntry = await postPelaporSkmk(pelaporData);
  const jenazahEntry = await postJenazahSkmk(jenazahData);

  const suratSkmkEntry = await postSuratSkmk(
    suratSkmkData,
    diagnosaEntry,
    pelaporEntry,
    jenazahEntry
  )

  return suratSkmkEntry;
}

const postDiagnosaSkpk = async (diagnosaUmumData, diagnosaIbuAnakData, lamaKematian) => {
  const diagnosaIbyBayiId = lamaKematian === '0' ?
    await postDiagnosaIbuBayi(diagnosaIbuAnakData) : null;

  const emptyData = { data: [{ diagnosa_id: null}] };

  const { data: penyebabLangsung } = diagnosaUmumData[0] !== null ?
    await supabase.from('diagnosa').insert(diagnosaUmumData[0]) : emptyData;
  const { data: penyebabAntara1 } = diagnosaUmumData[1] !== null ?
    await supabase.from('diagnosa').insert(diagnosaUmumData[1]) : emptyData;
  const { data: penyebabAntara2 } = diagnosaUmumData[2] !== null ?
    await supabase.from('diagnosa').insert(diagnosaUmumData[2]) : emptyData;
  const { data: penyebabDasar } = diagnosaUmumData[3] !== null ?
    await supabase.from('diagnosa').insert(diagnosaUmumData[3]) : emptyData;
  const { data: finalUcod } = diagnosaUmumData[4] !== null ?
    await supabase.from('diagnosa').insert(diagnosaUmumData[4]) : emptyData;

  const diagnosaUmum = [
    penyebabLangsung[0],
    penyebabAntara1[0],
    penyebabAntara2[0],
    penyebabDasar[0],
    finalUcod[0]
  ];

  const diagnosaUmumIds = diagnosaUmum.map(diagnosa => diagnosa.diagnosa_id);

  const { data } = await supabase
  .from('diagnosa_skpk')
  .insert([
    {
      penyebab_langsung_id: diagnosaUmumIds[0],
      penyebab_antara_1_id: diagnosaUmumIds[1],
      penyebab_antara_2_id: diagnosaUmumIds[2],
      penyebab_dasar_id: diagnosaUmumIds[3],
      diagnosa_ibu_bayi_id: diagnosaIbyBayiId,
      final_ucod: diagnosaUmumIds[4]
    }
  ])

  return data[0].diagnosa_skpk_id
}

const postJenazahSkpk = async (jenazahData) => {
  let { data: matchingJenazah } = await supabase
  .from('jenazah_skpk')
  .select('nama_jenazah')
  .filter('ktp', 'eq', jenazahData.ktp)

  if (matchingJenazah.length > 0) return null;

  const { data } = await supabase
  .from('jenazah_skpk')
  .insert([
    jenazahData,
  ])

  return data[0].jenazah_id;
}

export const postSuratSkpk = async (
  suratSkpkData,
  diagnosa_skpk_id,
  jenazah_id
) => {
  const { data } = await supabase
  .from('surat_skpk')
  .insert([
    {
      ...suratSkpkData,
      diagnosa_skpk_id,
      jenazah_id
    },
  ]);

  return data;
}

export const createSkpkEntry = async (
  suratSkpkData,
  jenazahData,
  diagnosaUmumData,
  diagnosaIbuAnakData,
  lamaKematian
) => {
  
  const diagnosaEntry = await postDiagnosaSkpk(diagnosaUmumData, diagnosaIbuAnakData, lamaKematian);
  const jenazahEntry = await postJenazahSkpk(jenazahData);

  const suratSkpkEntry = await postSuratSkpk(
    suratSkpkData,
    diagnosaEntry,
    jenazahEntry
  )

  return suratSkpkEntry;
}

export const getSkmkLogs = async () => {
  const { data: skmkData } = await supabase
    .from('surat_skmk')
    .select(`
      jenazah_skmk (
        nama_jenazah,
        jenis_kelamin,
        umur_tahun,
        umur_bulan,
        alamat_kecamatan,
        alamat_kelurahan,
        tanggal_meninggal
      ),
      diagnosa_skmk (
        penyebab_langsung_id,
        penyebab_antara_1_id,
        penyebab_antara_2_id,
        penyebab_dasar_id
      ),
      nama_penandatangan
    `);
  
  const getSkmkDataWithDiagnosa = async () => {
    const skmkDiagnosaIds = skmkData.map(data => data.diagnosa_skmk);
    return Promise.all(
      skmkDiagnosaIds.map(async (diagnosaIds, idx) => {
        let skmkDiagnosaList = {};
        for (const diagnosaId in diagnosaIds){
          if (diagnosaIds[diagnosaId] === null){
            skmkDiagnosaList[diagnosaId] = null
          } else {
            const { data: diagnosaItem } = await supabase.from('diagnosa').select(`icdx`).eq('diagnosa_id', diagnosaIds[diagnosaId]);
            skmkDiagnosaList[diagnosaId] = diagnosaItem[0].icdx
          }
        }
        return {
          ...skmkData[idx],
          diagnosa_skmk_list: skmkDiagnosaList
        }
      })
    );
  }

  const skmkDataWithDiagnosa = await getSkmkDataWithDiagnosa();
  
  return skmkDataWithDiagnosa;
}

export const getSkpkLogs = async () => {
  const { data: skpkData } = await supabase
    .from('surat_skpk')
    .select(`
      jenazah_skpk (
        nama_jenazah,
        jenis_kelamin,
        umur_tahun,
        umur_bulan,
        alamat_kecamatan,
        alamat_kelurahan,
        tanggal_meninggal
      ),
      diagnosa_skpk (
        penyebab_langsung_id,
        penyebab_antara_1_id,
        penyebab_antara_2_id,
        penyebab_dasar_id
      ),
      nama_penandatangan
    `);
  
  const getSkpkDataWithDiagnosa = async () => {
    const skpkDiagnosaIds = skpkData.map(data => data.diagnosa_skpk);
    return Promise.all(
      skpkDiagnosaIds.map(async (diagnosaIds, idx) => {
        let skpkDiagnosaList = {};
        for (const diagnosaId in diagnosaIds){
          if (diagnosaIds[diagnosaId] === null){
            skpkDiagnosaList[diagnosaId] = null
          } else {
            const { data: diagnosaItem } = await supabase.from('diagnosa').select(`icdx`).eq('diagnosa_id', diagnosaIds[diagnosaId]);
            skpkDiagnosaList[diagnosaId] = diagnosaItem[0].icdx
          }
        }
        return {
          ...skpkData[idx],
          diagnosa_skpk_list: skpkDiagnosaList
        }
      })
    );
  }

  const skpkDataWithDiagnosa = await getSkpkDataWithDiagnosa();
  
  return skpkDataWithDiagnosa;
}