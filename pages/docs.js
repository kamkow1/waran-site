import SectionHeader from '../components/Docs/Headers/SectionHeader'
import Section from '../components/Docs/Section';
import styles from '../styles/Docs.module.scss'
import { CodeBlock, dracula } from 'react-code-blocks';

export default function Docs() {
    return (
        <div>
            <div className={`p-5 ${styles.content}`}>
                <Section>
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
                </Section>
                <Section>
                    <SectionHeader text='variables' size={1} isCenter={true} />
                    <Section>
                        <SectionHeader text='create a new variable' size={3} />
                        syntax
                        <div className={styles.code_bl}>
                            <CodeBlock text='indentifier := value' theme={dracula} language='js' showLineNumbers={false} />
                        </div>
                        example
                        <div className={styles.code_bl}>
                            <CodeBlock text={
                                'string_value := "some text"\n' +
                                'my_number := 3421\n' +
                                'floating_point_number := 45.4534\n' +
                                'negative_number := -425.435'
                            } theme={dracula} language='js' showLineNumbers={false} />
                        </div>
                    </Section>
                    <Section>
                        <SectionHeader text='creating a new project' size={3} />
                        to initialize an empty waran project run
                        <div className={styles.code_bl}>
                            <CodeBlock text='wrn init' theme={dracula} language='js' showLineNumbers={false} />
                        </div>
                    </Section>
                </Section>
            </div>
        </div>
    );
}