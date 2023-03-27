import {
	render,
	screen,
	fireEvent,
	cleanup,
} from '@testing-library/react/pure';
import UserModal from '../../../../src/modules/home/components/UserModal';
import { jest, describe, expect, it, beforeAll } from '@jest/globals';
import { QueryClient, QueryClientProvider } from 'react-query';

jest.mock('../../../../src/core/api/requests', () => ({
	getResourceList: jest.fn(() => []),
}));

describe('UserModal', () => {
	const handleClose = jest.fn();
	const defaultProps = {
		open: true,
		handleClose,
	};

	beforeAll(() => {
		render(
			<QueryClientProvider client={queryClient}>
				<UserModal {...defaultProps} />
			</QueryClientProvider>
		);
	});

	const queryClient = new QueryClient();

	it('renders with default props', () => {
		expect(screen.getByText('Create new user')).toBeTruthy();
	});

	it('renders with custom title prop', () => {
		cleanup();
		const customTitle = 'Edit User';
		render(
			<QueryClientProvider client={queryClient}>
				<UserModal {...defaultProps} title={customTitle} />
			</QueryClientProvider>
		);

		expect(screen.getByText(customTitle)).toBeTruthy();
	});

	it('calls handleClose when cancel button is clicked', () => {
		const cancelButton = screen.getByText('Cancel');
		fireEvent.click(cancelButton);
		expect(handleClose).toHaveBeenCalled();
	});
});
