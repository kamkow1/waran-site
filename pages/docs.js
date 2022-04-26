import SectionHeader from '../components/Docs/Headers/SectionHeader'
import Section from '../components/Docs/Section';
import styles from '../styles/Docs.module.scss'

export default function Docs() {
    return (
        <div>
            <div className={`p-5 text-center ${styles.content}`}>
                <SectionHeader text='installation' />

                <Section>
                    
                </Section>
            </div>
        </div>
    );
}