
import Entry from './Components/Entry'
import Header from './Components/Header'
import data from './data'

function App() {

  const entryElements = data.map((entry) => {
    return (
        <Entry
            key={entry.id}
            {...entry}
            // entry={entry}

         /* img={entry.img}
            title={entry.title}
            country={entry.country}
            googleMapsLink={entry.googleMapsLink}
            dates={entry.dates}
            text={entry.text} */
        />
    )
})


  return (
    <>
        <Header />
        <main>
              {entryElements}
        </main>
    </>
  )
}

export default App
