const User_content = () => {
	return (
		<div className="content">
          <img src="https://phonoteka.org/uploads/posts/2021-04/1619464749_15-phonoteka_org-p-shapka-dlya-yutuba-chernii-fon-25.jpg" alt="" className="content__header" />
          <div className="user">
            <img src="https://yt3.ggpht.com/ytc/AKedOLQDpJL4j3zA9P_m9NpSA9NV8Fp2LoRg8Gdjy-OW=s900-c-k-c0x00ffffff-no-rj" alt="" className="user__avatar" />
            <ul className="user__info">
              <li className="user__info__header">Alexandr R.</li>
              <li className="user__info__el">Date of Birth: 21 June</li>
              <li className="user__info__el">City: Sevastopol</li>
              <li className="user__info__el">Education: SevSU</li>
              <li className="user__info__el">Web Site: https//...</li>
            </ul>
            <div className="user__posts">
              <h2>My posts</h2>
              <input type="text" className="user__posts__input" />
              <button className="user__posts__add">send</button>
            </div>
          </div>
        </div>
	);
}

export default User_content;