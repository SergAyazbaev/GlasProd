import{H as e,R as t,S as n,Z as r,b as i,f as a,it as o,mt as s,n as c,o as l,r as u,s as d,t as f,x as p,y as m}from"./index-3fKhPrU0.js";var h={class:`p-4 max-w-4xl mx-auto bg-white rounded shadow`},g={class:`text-lg font-bold mb-2`},_=[`placeholder`],v={class:`mt-4 flex gap-2`},y={name:`UploaderCuracept`,components:{LoaderCSV:{__name:`LoaderCSV`,props:{placeholder:{type:String,default:`Ctrl-C, Ctrl-V для вставки данных`},title:{type:String,default:`Загрузка CSV/JSON данных`},flagSklad:{type:Boolean,default:!1}},setup(e){let i=l(),f=c(),{activeSklad:y}=d(f),b=e,x=o(``);function S(){x.value=``}function C(){if(!x.value.trim()){f.messageInfo(`Введите данные CSV`);return}let e={active_sklad:y.value,csv:x.value};u.post(`/secure/invoice/load-curasept`,e).then(e=>{f.messageInfo(e.data.message||`Данные успешно загружены!`),i.push({name:`InvoiceEditForm`,params:{oid:e.data.invoice_id}})}).catch(e=>{f.messageError(e.response?.data?.error||e.message)}).finally(()=>{x.value=``})}return(i,o)=>(t(),n(`div`,h,[m(`h2`,g,s(b.title),1),o[2]||=m(`p`,{class:`mb-4`},`Вставьте сюда данные CSV, например:`,-1),r(m(`textarea`,{"onUpdate:modelValue":o[0]||=e=>x.value=e,class:`w-full border rounded p-2 font-mono text-sm`,rows:`30`,placeholder:b.placeholder},null,8,_),[[a,x.value]]),m(`div`,v,[e.flagSklad?p(``,!0):(t(),n(`button`,{key:0,class:`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600`,onClick:C},` Загрузить `)),m(`button`,{class:`bg-gray-300 px-4 py-2 rounded hover:bg-gray-400`,onClick:o[1]||=e=>S()},` Очистить `)])]))}}},props:{}};function b(n,r,a,o,s,c){let l=e(`LoaderCSV`);return t(),i(l,{style:{"flex-grow":`1`,width:`100%`,height:`46rem`},title:`Массовая загрузка Curacept`,placeholder:`                               

 Номенклатурный номер	--> Ед. изм. --> Штуки --> Цена за единицу, KZT

214333	шт	10	1,982.76
554231	шт	10	2,586.21
63845647	шт	10	3,275.86
677417141	шт	8	4,568.97
243637025	шт	10	4,568.97


                    `})}var x=f(y,[[`render`,b]]);export{x as default};