import axios from "axios";
import fileDownload from "js-file-download";
axios.get('http://localhost:3000/cvs/1681320805385UNESCO.pdf',{responseType:'blob'}).then((res)=>{
    console.log(res);
    fileDownload(res.data,'1681320805385UNESCO.pdf');
});