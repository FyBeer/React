import Account_style from './Account_style/Account.module.css'
import Posts from './Posts';

const Account = (props) => {
  return (
    <div className={Account_style.box}>
      <img src="https://phonoteka.org/uploads/posts/2021-04/1619464749_15-phonoteka_org-p-shapka-dlya-yutuba-chernii-fon-25.jpg" alt="" className={Account_style.header} />
      <div className={Account_style.user}>
        <img src="https://yt3.ggpht.com/ytc/AKedOLQDpJL4j3zA9P_m9NpSA9NV8Fp2LoRg8Gdjy-OW=s900-c-k-c0x00ffffff-no-rj" alt="" className={Account_style.avatar} />
        <ul className={Account_style.info}>
          <li className={Account_style.name}>Alexandr R.</li>
          <li className={Account_style.item}>Date of Birth: 21 June</li>
          <li className={Account_style.item}>City: Sevastopol</li>
          <li className={Account_style.item}>Education: SevSU</li>
          <li className={Account_style.item}>Web Site: https//...</li>
        </ul>
      </div>
      <Posts posts={props.accountData.posts}
             postsText={props.accountData.newPostText}
             dispatch={props.dispatch}></Posts>
    </div>
  );
}

export default Account;