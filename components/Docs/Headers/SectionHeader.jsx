import 'bootstrap/dist/css/bootstrap.min.css'

export default function SectionHeader({ text, size }) {
    return <div className={`mb-3 h${size}`}>{text}</div>
}