import React from 'react'

const myStyle = {
    headings: {
        backgroundColor: "Purple",
        color: "ehite",
        textAlign: "center",
        padding: 20
    },
    para: {
        backgroundColor: "black",
        color: "white",
        textAlign: "justify",
        padding: 20
    },
    blue: { backgroundColor: "blue" },
    dimgray: { backgroundColor: "dimgray" },
    magenta: { backgroundColor: "magenta" },
    green: { backgroundColor: "green" },
    blueviolet: { backgroundColor: "blueviolet" },
}

export default function CSSExample() {
    return (
        <>
            <div classNeme="main">
                <div classNeme="center">

                    <h1 style={{
                        backgroundColor: "navy",
                        color: "white",
                        padding: 10,
                        textAlign: "center"
                    }}>CSS Example</h1>
                    <h2 style={myStyle.headings}>Lorem ipsum dolor sit amet consectetur adipisicing elit.  velit reprehenderit, vitae ipsa fuga eaque error sit reiciendis adipisci, harum suscipit, rem maiores.</h2>
                    <h2 style={{ ...myStyle.headings, ...myStyle.blue }}>Omnis perspiciatis deserunt vel est? t amet veniam unde maxime cumque nihil molestiae aspernatur eius voluptatibus, omnis, ipsum error. Repellendus nemo delectus aliquid?</h2>
                    <h2 style={{ ...myStyle.headings, ...myStyle.dimgray }}>Perferendis omnis ab maiores aperiam, hic non tempora at? Excepturi, facere aut adipisci mollitia aliquam et quas quidem sunt, sint, expedita tenetur tempora? Ab omnis magnam laboriosam! Nobis, eaque rerum.</h2>
                    <h2 style={{ ...myStyle.headings, ...myStyle.magenta }}>Aspernatur ducimus ad qui expedita libero distinctio. Quidem corporis inventore excepturi, sit adipisci debitis totam nam corrupti fugiat perspiciatis vero optio est cum, deserunt architecto sequi sapiente beatae cumque id.</h2>
                    <h2 style={{ ...myStyle.headings, ...myStyle.green }}>Facere, nemo tenetur sed et aliquid distinctio modi aperiam minima? Architecto consequatur odio in voluptatem facere nam placeat molestiae, debitis harum voluptate neque quam nulla cumque natus autem tempora laboriosam.</h2>
                    <p style={myStyle.para}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, repudiandae? Mollitia esse harum nulla aspernatur eius illo, cumque, recusandae nam beatae iusto minus incidunt, debitis ab fugit! Tempora, at quod?</p>
                    <p style={{ ...myStyle.para, ...myStyle.blue }}>Est dolorem ut porro error qui, cumque expedita laboriosam cum maxime? Voluptas voluptatibus blanditiis eum, quia neque alias. Architecto dolor dolorum repellendus reiciendis, id voluptatem reprehenderit ut quod eius ipsam.</p>
                    <p style={{ ...myStyle.para, ...myStyle.dimgray }}>Possimus perferendis rem vel, reiciendis quo, error minima provident officia quia, quos voluptates consequuntur consectetur deserunt at itaque eos temporibus id ullam et. Eos possimus exercitationem sint tempora voluptatibus excepturi.</p>
                    <p style={{ ...myStyle.para, ...myStyle.magenta }}>Impedit dolore totam tempora nesciunt facilis culpa, consectetur reprehenderit quam excepturi natus aliquam quasi deserunt eligendi ratione? Doloribus, sint placeat, commodi aliquam cupiditate minus nihil eum libero, velit labore sequi!</p>
                    <p style={{ ...myStyle.para, ...myStyle.green }}>Sint ea, repudiandae voluptate reiciendis quaerat quidem consequuntur ipsum laboriosam, animi voluptatibus rem et amet? Ipsa odio, dicta rerum, accusantium praesentium voluptates fugit vitae ducimus laboriosam dignissimos reiciendis molestiae sequi.</p>
                </div>
            </div>
        </>
    )
}