import propTypes from 'prop-types';
import style from './Section.module.scss';

const Section = ({ title, children }) => {
    return (
        <section>
            <p className={style.Section__title}>{title}</p>
            {children}
        </section>
    );
};

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.element.isRequired,
};
export default Section;
