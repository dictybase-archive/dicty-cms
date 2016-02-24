import { Component } from 'react'

export default class Page extends Component {
    displayName = 'page component'
    render() {
        return (
            <div>
                <h1>
                    About Dicty Stock Center
                </h1>
                <p>
                    In the fall of 2002 the Dicty Stock Center (DSC) opened at
                    Columbia University in New York City as a repository for
                    <i>Dictyostelium discoideum</i> and other Dictiosteliids under
                    the direction of Dr. Richard Kessin, and curated by Mr. Jakob
                    Franke. The Dicty Stock Center was relocated to Northwestern
                    University in April of 2009. As of July 2015, nearly
                    <b>2,000 strains</b> can be acquired from the stock center. The
                    strains available from the stock center are in the
                    <a href="/db/cgi-bin/dictyBase/SC/strainlist.pl">strain catalog</a>
                    on our website. Also as of July 2015, over
                    <b>800 plasmids</b> are available and the
                    <a href="/db/cgi-bin/dictyBase/SC/plasmid_catalog.pl">plasmid catalog</a>.
                    Both collections are rapidly expanding.
                    Several strain catalogs are listed
                    <a href="/StockCenter/StockCenter.html">here</a>. Additionally
                    we hold other materials such as DNA libraries and antobodies,
                    accessible <a href="/StockCenter/additional_materials.html">here</a>.
                    Starting in August 2105, the National Institute of Health
                    mandates that we
                    <a href="/StockCenter/OrderInfo.html"><b>charge</b></a> for
                    stock center materials.
                </p>
                <p>
                    The collection is being built by requesting published strains
                    and plasmids. We encourage and also periodically remind
                    investigators to send new mutants, natural isolates, and
                    plasmids, once they have been published. Validation of the
                    materials is mostly done by observable phenotypes, while
                    mutants are also tested for drug-resistance markers. Plasmids
                    will be checked by performing one or two diagnostic restriction
                    enzyme digests, and are stored both as DNA and as transformed
                    bacteria at -80°C. However, a large component of the quality
                    control program will consist of feedback from the recipients of
                    materials. Strains are stored at two different locations in
                    liquid nitrogen, as spores and/or as vegetative amoebae.
                </p>
                <hr>
                <p>
                    Click <a href="/StockCenter/StockCenterHistory.html">here</a>
                    for a history of the Stock Center conception.
                </p>
                <p>
                    For more procedural and technical information, see our <a href="/StockCenter/FAQ_StockCenter.html">Stock Center FAQ</a> page.
                </p>
                <br>
                </div>
            )
    }
}
