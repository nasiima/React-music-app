import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'



function Album() {

  // const resetBgC = () => {
  //   setBgC(initalBgC)
  // }


    const [song] = useState([
        { id: 0, name: 'Euphoria',   releaseDate: '2018', coverArt:"https://i1.sndcdn.com/artworks-000347240793-52bj2b-t500x500.jpg", like: "🤍"},

        { id: 1, name: 'Serendipity', releaseDate: '2017', coverArt:"https://i1.sndcdn.com/artworks-000243444233-qnpkl0-t500x500.jpg", like: "🤍"},

        { id: 2, name: 'Dimple', releaseDate: '2020', coverArt:"https://i.pinimg.com/originals/51/53/45/515345baaacf1babf2ca34b6dc299354.jpg", like: "🤍"},

        { id: 3, name: 'Her', releaseDate: '2017', coverArt:"https://upload.wikimedia.org/wikipedia/en/6/62/Ly-her.jpg", like: "🤍"},

        { id: 4, name: 'Fake Love',  releaseDate: '2021', coverArt:"https://images.genius.com/17ec7a755c21bdc7370645f5766d5513.820x820x1.jpg", like: "🤍"},

        { id: 5, name: 'Trivia',  releaseDate: '2018', coverArt:"https://i1.sndcdn.com/artworks-000417602085-0hykgo-t500x500.jpg", like: "🤍"},

        { id: 6, name: 'DNA',  releaseDate: '2017', coverArt:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99c08eac-1777-4459-81b0-341be2da5190/dbnzq1q-7a603463-13e2-4671-98c2-097bfd2b435c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk5YzA4ZWFjLTE3NzctNDQ1OS04MWIwLTM0MWJlMmRhNTE5MFwvZGJuenExcS03YTYwMzQ2My0xM2UyLTQ2NzEtOThjMi0wOTdiZmQyYjQzNWMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iBoNEJZ6Memf8Pl_r7un1tTrvueQRUv3hhwBtdnb2Uc", like: "🤍"},

        { id: 7, name: 'Singularuty', releaseDate: '2018', coverArt:"https://studybreaks.com/wp-content/uploads/2018/05/bts-singularity.jpg", like: "🤍"},

        { id: 8, name: 'The truth untold', releaseDate: '2018', coverArt:"https://metro.co.uk/wp-content/uploads/2018/05/bts-tear.jpg?quality=90&strip=all&zoom=1&resize=480%2C301", like: "🤍"},

        { id: 9, name: 'I am fine',  releaseDate: '2018', coverArt:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1568310585l/53030111._SX0_SY0_.jpg", like: "🤍" }
      ])


      const handleLike = e => {
        e.preventDefault();
        if (e.target.textContent === "🤍") {
          e.target.textContent = "❤️"
        } else {
          e.target.textContent = "🤍"
        }
      };

      const renderRows = () => {
        return song.map(s => 
        <tr key={s.id}>
        <td>  <div>{s.name}</div> </td>
     
    <td><div className='releaseDate'>{s.releaseDate}</div></td> 
          <td><img className="img" alt="" src={s.coverArt} width="150"/></td>
          <td><p  role={s.name} id={s.name} onClick={handleLike} className="heart">{s.like}</p></td>
        </tr>)
      }

      return (

        <div className='body'> 


    
        <div className="table-responsive" >

          <h2 className='h2'>Album</h2>

{

          <table className='table align-middle'>
            <thead>
              <tr>
                <th><div className='songName'>Song Name</div></th> 
                <th>Release Date</th>
                <th>Cover Art</th>
                <th >Like</th>
              </tr>
            </thead>
            <tbody>
              { renderRows() }
            </tbody>
          </table> }
 









          </div>

        </div>
      );
}

  
  export default Album;