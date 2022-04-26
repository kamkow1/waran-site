import SectionHeader from '../components/Docs/Headers/SectionHeader'
import Section from '../components/Docs/Section';
import styles from '../styles/Docs.module.scss'
import { CodeBlock, dracula } from 'react-code-blocks';

export default function Docs() {
    return (
        <div>
            <div className={`p-5 ${styles.content}`}>
                <SectionHeader text='getting started' size={1} isCenter={true} />
                <Section>
                    <SectionHeader text='installation' size={3} />
                    to install the waran compiler, run
                    with npm
                    <div className={styles.code_bl}>
                        <CodeBlock text='npm i -g waran' theme={dracula} language='js' showLineNumbers={false} />
                    </div>
                    or with yarn
                    <div className={styles.code_bl}>
                        <CodeBlock text='yarn global add waran' theme={dracula} language='js' showLineNumbers={false} />
                    </div>
                </Section>

                <Section>
                    <SectionHeader text='creating a new project' size={3} />
                    to initialize an empty waran project run
                    <div className={styles.code_bl}>
                        <CodeBlock text='wrn init' theme={dracula} language='js' showLineNumbers={false} />
                    </div>
                </Section>
            </div>
        </div>
    );
}