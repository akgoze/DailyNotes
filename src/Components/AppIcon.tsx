interface IconProps {
  icon: string | undefined ;
  size?: 'lg' | 'xl' | '2xl' ;
  color?: 'orange' | 'navy' | 'white';
  label?: string;
}

const AppIcon = (props:IconProps = { icon: undefined, size: 'xl', color: 'navy', label: ''  }  ) => {
const { icon, size, color, label } = props;

const IconClasses = icon && [
    'app-icon',
    'flex',
    'items-center',
    'justify-center',
    `i-${icon}`,
    `text-${color}`,
    `text-${size}`
].join(' ');

  return (
    <i className={IconClasses} aria-label={label}></i>
  );
}

export default AppIcon;