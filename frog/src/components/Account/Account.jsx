import Style_account from './Account_style/Account.module.css'
import Posts from './Posts';

const Account = () => {
	return (
		<div className={Style_account.box}>
          <img src="https://phonoteka.org/uploads/posts/2021-04/1619464749_15-phonoteka_org-p-shapka-dlya-yutuba-chernii-fon-25.jpg" alt="" className={Style_account.header} />
          <div className={Style_account.user}>
            <img src="https://yt3.ggpht.com/ytc/AKedOLQDpJL4j3zA9P_m9NpSA9NV8Fp2LoRg8Gdjy-OW=s900-c-k-c0x00ffffff-no-rj" alt="" className={Style_account.avatar} />
            <ul className={Style_account.info}>
              <li className={Style_account.name}>Alexandr R.</li>
              <li className={Style_account.item}>Date of Birth: 21 June</li>
              <li className={Style_account.item}>City: Sevastopol</li>
              <li className={Style_account.item}>Education: SevSU</li>
              <li className={Style_account.item}>Web Site: https//...</li>
            </ul>
          </div>
          <Posts></Posts>
        </div>
	);
}

export default Account;