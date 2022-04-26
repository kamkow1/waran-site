import 'bootstrap/dist/css/bootstrap.min.css'

export default function SectionHeader({ text, size, isCenter }) {
    return <div className={`mb-3 h${size} ${isCenter ? 'text-center' : ''}`}>{text}</div>
}