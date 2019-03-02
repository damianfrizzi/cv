import { PureComponent, ReactNode } from 'react'
import styles from './styles.css'

export default class Header extends PureComponent {
  public render(): ReactNode {
    return (
      <div className={styles.header}>
        <div className={'container'}>
          <p style={{ fontSize: '.9rem' }}>
            Damian Frizzi
            <br />
            Gerbiweg 20
            <br />
            8910 Affoltern am Albis
            <br />
            079 739 03 27
            <br />
            <a href="mailto:damianfrizzi@gmail.com">damianfrizzi@gmail.com</a>
          </p>

          <p style={{ float: 'right', fontSize: '.9rem', marginRight: '30px' }}>
            Liip
            <br />
            Melanie Mächler
            <br />
            Limmatstrasse 183
            <br />
            CH-8005 Zürich
          </p>

          <div style={{ clear: 'both' }} />

          <p style={{ float: 'right', fontSize: '.9rem', marginRight: '30px' }}>Zürich, 08.02.2019</p>

          <div style={{ clear: 'both' }} />
          <br />
          <br />

          <h2>Bewerbung als Frontend Web Developer</h2>

          <p>Sehr geehrte Frau Mächler</p>

          <p>
            Nach der erfolgreichen Beendigung eines grösseren Projektes bei meinem aktuellen Arbeitgeber bin ich auf der Suche nach einer neuen Herausforderung.
            Über das Portal jobs.ch bin ich auf die von Ihnen ausgeschrieben Stelle als Frontend Web Developer aufmerksam geworden.
          </p>

          <p>
            Obwohl mir Liip bis dato leider unbekannt war, hat mich der Auftritt Ihrer Firma sofort angesprochen. Aus fachlicher Sicht sind es vor allem die
            spannenden Projekte, die Vielfältigkeit der involvierten Rollen und die innovative Arbeitsweise unter Anwendung der Holacracy-Methodik. Zudem fand
            ich die Bewerbung der vakanten Position innerhalb des Quellcodes sehr sympathisch :). Auf menschlicher Ebene begeistert mich, dass Liip sich auch
            humanitären Angelegenheiten annimmt.
          </p>

          <p>
            Als Frontend Entwickler mit langjähriger Erfahrung denke ich wäre ich eine Berreicherung für das Team von Liip. Zu meinen Stärken zählen vor allem
            das effiziente Umsetzen von qualtiativ hochwertigen Lösungen. Ich verfüge über ein breites Wissen in diesem Fachbereich und halte mich stets über
            aktuelle Trends und neue Technologien auf dem Laufenden.
          </p>

          <p>Ich würde mich freuen, mich Ihnen in einem persönlichen Gespräch genauer vorstellen zu können.</p>
          <p>Freundliche Grüsse</p>
          <p>Damian Frizzi</p>
        </div>
      </div>
    )
  }
}
