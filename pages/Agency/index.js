import { AgencyPage } from "../../sections";


const texts = [
    {
        name: 'Brief',
        description: "Complete <strong>brief writing or simple duidance</strong> on what to include, we've got you covered"
    },
    {
        name: 'Search',
        description: "In-depth agency search covering; <strong>criteria matching</strong>,door knocking and due-diligence vetting"
    },
    {
        name: 'Pitch',
        description: "Comprehensive <strong>pitch management</strong>, including comms, diary management and pitch hosting."
    },
]

function Agency() {
    return <div>
        <AgencyPage texts={texts} image={'/img/video.png'} title={'Managed agency selection'} subTitle={'Strengthen your onboarding process'}/>
    </div>
}

export default Agency