import { ArrowUpRight, Info, CheckCircle2, AlertTriangle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
export function PageHeading({eyebrow, title, subtitle, action}) { return <div className="page-heading"><div>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>{action}</div>; }
export function DemoNotice({children}) { const {t}=useApp(); return <div className="demo-notice" role="note"><Info size={18}/><div><strong>{t('demo')}</strong><span>{children || t('demoNote')}</span></div></div>; }
export function StatCard({icon: Icon, label, value, hint, tone='green', to}) { const {t}=useApp(); const content=<><div className={`stat-icon ${tone}`}><Icon size={21}/></div><div className="stat-label">{label}</div><div className="stat-value">{value}</div>{hint && <div className="stat-hint">{hint}</div>}{to && <div className="stat-link">{t('viewDetails')} <ArrowUpRight size={15}/></div>}</>; return to ? <Link to={to} className="stat-card stat-card-link">{content}</Link> : <div className="stat-card">{content}</div>; }
export function SectionTitle({title, action, to}) { return <div className="section-title"><h2>{title}</h2>{action && <Link to={to || '/'}>{action}<ChevronRight size={16}/></Link>}</div>; }
export function Status({children, kind='success'}) { return <span className={`status status-${kind}`}>{kind==='success' ? <CheckCircle2 size={14}/> : <AlertTriangle size={14}/>} {children}</span>; }
export function EmptyState({title, body}) { return <div className="empty-state"><Info size={25}/><strong>{title}</strong><p>{body}</p></div>; }
