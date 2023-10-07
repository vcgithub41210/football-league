import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import mech from '/public/mech.jpeg'
import csb from '/public/csb.jpeg'
import csbs from '/public/csbs.jpeg'
import eb from '/public/eb.jpg'
export default function Home() {
  return (
    <main className={styles.main}>
      {/* <header className={styles.header}>
      </header> */}
      <div className={styles.title}>
        {/* <h1 className='hidden'>MEC Football League</h1> */}
      </div>
      {/* <footer className={styles.footer}>
      </footer> */}
    </main>
    // <main className={styles.main}>
    //   <div className={styles.main}>
    //     <div className={styles.heading}>
    //       <h1>POINTS TABLE</h1>
    //     </div>
    //     <div className={styles.table}>
    //       <div className={styles.des}>
    //       <h1>Team</h1>
    //       <h1>P</h1>
    //       <h1>W</h1>
    //       <h1>L</h1>
    //       <h1>D</h1>
    //       <h1>GF</h1>
    //       <h1>GA</h1>
    //       <h1>GD</h1>
    //       <h1>PTS</h1>
    //       </div>
    //     <div className={styles.mech1}>
    //       <div className={styles.imageContainer}>
    //         <Image src={mech} className={styles.img}></Image>
    //       </div>
    //     </div>
    //      <div className={styles.csc}>
    //      <div className={styles.imageContainer}>
    //         <Image src={mech} className={styles.img}></Image>
    //       </div>
    //      </div>
    //       <div className={styles.csb}>
    //       <div className={styles.imageContainer}>
    //         <Image src={csb} className={styles.img}></Image>
    //       </div>
    //       </div>
    //        <div className={styles.csbs}>
    //        <div className={styles.imageContainer}>
    //         <Image src={csbs} className={styles.img}></Image>
    //       </div>
    //        </div>
    //         <div className={styles.csa}>
    //         <div className={styles.imageContainer}>
    //         <Image src={mech} className={styles.img}></Image>
    //       </div>
    //         </div>
    //          <div className={styles.eca}>
    //          <div className={styles.imageContainer}>
    //         <Image src={mech} className={styles.img}></Image>
    //       </div>
    //          </div>
    //           <div className={styles.mech2}>
    //           <div className={styles.imageContainer}>
    //         <Image src={mech} className={styles.img}></Image>
    //       </div>
    //           </div>
    //            <div className={styles.eb}>
    //            <div className={styles.imageContainer}>
    //         <Image src={eb} className={styles.img}></Image>
    //       </div>
    //            </div>
    //             <div className={styles.ecb}>
    //             <div className={styles.imageContainer}>
    //         <Image src={mech} className={styles.img}></Image>
    //       </div>
    //             </div>
    //             </div>
    //   </div>
    //   </main>
  )
}