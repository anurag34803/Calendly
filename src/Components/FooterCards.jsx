function NavbarCards(props) {
    let {data} = props;
    let subtitle = data.subtitle;
    return(
        <>
        <div className="footer-opt">
          <h1 className='font-bold text-md'>{data.title}</h1>
          {
              subtitle.map((item, index) => (
              <a key={index} href="#" className="my-5 block">{item}<br/></a>
             )) 
          }
        </div>
        </>
    )
}

export default NavbarCards;