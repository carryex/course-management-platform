import React from 'react';
import courseCardStyles from './CourseCard.styles';
import { PiCertificateLight } from 'react-icons/pi';
import { GrSteps } from 'react-icons/gr';

export interface CourseCardProps {
  variant: 'free' | 'career';
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  coursesCount?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  variant,
  title,
  description,
  difficulty,
  duration,
  coursesCount,
}) => {
  const {
    base,
    header,
    title: titleClasses,
    description: descriptionClasses,
    footer,
    footerItem,
    body,
    withIcon,
    icon,
    absoluteLayout,
    cardContainer,
    careerWrapper,
  } = courseCardStyles({ variant });
  const headerText = variant === 'career' ? 'Career path' : 'Free course';
  return (
    <div className={cardContainer()}>
      <div className={base()}>
        <div className={careerWrapper()}>
          <div className={header()}>{headerText}</div>
          <div className={body()}>
            <h2 className={titleClasses()}>{title}</h2>
            <p className={descriptionClasses()}>{description}</p>
          </div>
          <div className={footer()}>
            {variant === 'free' && (
              <div className={footerItem()}>
                <div className={withIcon()}>
                  <span className={icon()}>
                    <GrSteps />
                  </span>
                  {difficulty}
                </div>
                <div>{duration}</div>
              </div>
            )}
            {variant === 'career' && (
              <>
                <div className={footerItem()}>
                  <span>Includes {coursesCount} Courses</span>
                </div>

                <div className={footerItem()}>
                  <div className={withIcon()}>
                    <span className={icon()}>
                      <PiCertificateLight />
                    </span>
                    <span>With Certificate</span>
                  </div>
                </div>

                <div className={footerItem()}>
                  <div className={withIcon()}>
                    <span className={icon()}>
                      <GrSteps />
                    </span>
                    {difficulty}
                  </div>
                  <div>{duration}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={absoluteLayout()}></div>
    </div>
  );
};

export default CourseCard;
