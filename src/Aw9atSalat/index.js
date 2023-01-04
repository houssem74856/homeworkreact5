import { useEffect, useState } from 'react'
import './index.css'

function Aw9atSalat({minutes,hours}) {
    const link = 'http://www.islamicfinder.us/index.php/api/prayer_times?country=DZ&zipcode=16000&latitude=36.4701645&longitude=2.8287985'
    const [aw9at,setAw9at] = useState({})

    const [wa9tFajr,setWa9tFajr] = useState('wa9t')
    const [wa9tDuha,setWa9tDuha] = useState('wa9t')
    const [wa9tDhuhr,setWa9tDhuhr] = useState('wa9t')
    const [wa9tAsr,setWa9tAsr] = useState('wa9t')
    const [wa9tMaghrib,setWa9tMaghrib] = useState('wa9t')
    const [wa9tIsha,setWa9tIsha] = useState('wa9t')

    useEffect(() => {
    if((parseInt(hours)>6 && parseInt(hours)<8) || (parseInt(hours) === 6 && parseInt(minutes)>=44) || (parseInt(hours) === 8 && parseInt(minutes)<1)) {
        setWa9tDuha('wa9tMod')
        setWa9tFajr('wa9t')
    }
    else if((parseInt(hours)>8 && parseInt(hours)<12) || (parseInt(hours) === 8 && parseInt(minutes)>=1) || (parseInt(hours) === 12 && parseInt(minutes)<53)) {
        setWa9tDhuhr('wa9tMod')
        setWa9tDuha('wa9t')
    }
    else if((parseInt(hours)>12 && parseInt(hours)<15) || (parseInt(hours) === 12 && parseInt(minutes)>=53) || (parseInt(hours) === 15 && parseInt(minutes)<27)) {
        setWa9tAsr('wa9tMod')
        setWa9tDhuhr('wa9t')
    }
    else if((parseInt(hours)>15 && parseInt(hours)<17) || (parseInt(hours) === 15 && parseInt(minutes)>=27) || (parseInt(hours) === 17 && parseInt(minutes)<46)) {
        setWa9tMaghrib('wa9tMod')
        setWa9tAsr('wa9t')
    }
    else if((parseInt(hours)>17 && parseInt(hours)<19) || (parseInt(hours) === 17 && parseInt(minutes)>=46) || (parseInt(hours) === 19 && parseInt(minutes)<2)) {
        setWa9tIsha('wa9tMod')
        setWa9tMaghrib('wa9t')
    }
    else {
        setWa9tFajr('wa9tMod')
        setWa9tIsha('wa9t')
    }},[minutes])

    const fetchData = async () => {
        const result = await fetch(link)
        let resultInJs = await result.json()

        let Fajr = resultInJs.results.Fajr.slice(0,-5)
        let Duha = resultInJs.results.Duha.slice(0,-5)
        let Dhuhr = resultInJs.results.Dhuhr.slice(0,-5)

        let Asr = resultInJs.results.Asr.slice(0,-8)
        Asr = (parseInt(Asr)+12).toString() + resultInJs.results.Asr.slice(-8,-5)

        let Maghrib = resultInJs.results.Maghrib.slice(0,-8)
        Maghrib = (parseInt(Maghrib)+12).toString() + resultInJs.results.Maghrib.slice(-8,-5)

        let Isha = resultInJs.results.Isha.slice(0,-8)
        Isha = (parseInt(Isha)+12).toString() + resultInJs.results.Isha.slice(-8,-5)
        
        setAw9at({Fajr,Duha,Dhuhr,Asr,Maghrib,Isha})
    }

    useEffect(() => {
        fetchData()
    },[]) 



    return (
        {aw9at} && <div className="aw9at">
            <div className={wa9tFajr}>
                <p>Fajr</p>
                <h3>{aw9at.Fajr}</h3>
            </div>
            <div className={wa9tDuha}>
                <p>Duha</p>
                <h3>{aw9at.Duha}</h3>
            </div>
            <div className={wa9tDhuhr}>
                <p>Dhuhr</p>
                <h3>{aw9at.Dhuhr}</h3>
            </div>
            <div className={wa9tAsr}>
                <p>Asr</p>
                <h3>{aw9at.Asr}</h3>
            </div>
            <div className={wa9tMaghrib}>
                <p>Maghrib</p>
                <h3>{aw9at.Maghrib}</h3>
            </div>
            <div className={wa9tIsha}>
                <p>Isha</p>
                <h3>{aw9at.Isha}</h3>
            </div>
        </div>
    )
}

export default Aw9atSalat;